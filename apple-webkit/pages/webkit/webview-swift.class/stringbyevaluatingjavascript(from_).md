> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/stringbyevaluatingjavascript(from:)](https://developer.apple.com/documentation/webkit/webview-swift.class/stringbyevaluatingjavascript(from:))

# stringByEvaluatingJavaScript(from:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the result of running a script.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func stringByEvaluatingJavaScript(from script: String!) -> String!
```

## Parameters

- `script`: The script to run.

<a id="return-value"></a>

## Return Value

The result of running a JavaScript specified by `script`, or an empty string if the script failed.

# stringByEvaluatingJavaScriptFromString: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns the result of running a script.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (NSString *) stringByEvaluatingJavaScriptFromString:(NSString *) script;
```

## Parameters

- `script`: The script to run.

<a id="return-value"></a>

## Return Value

The result of running a JavaScript specified by `script`, or an empty string if the script failed.
