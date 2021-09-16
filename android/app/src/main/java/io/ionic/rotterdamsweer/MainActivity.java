package niels.rotterdamsweer;

import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// Initializes the Bridge
		this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
		// Additional plugins you've installed go here
		// Ex: add(TotallyAwesomePlugin.class);
		}});
	}


	@Override
	public void onBackPressed() {
		ViewGroup rootView = getWindow().getDecorView().findViewById(android.R.id.content);
		WebView webView = rootView.findViewById(R.id.webview);

		if (webView.canGoBack()) {
			webView.goBack();
		} else {
			super.onBackPressed();
			finish();
		}
	}
}
