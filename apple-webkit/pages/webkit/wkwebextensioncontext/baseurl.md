> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/baseurl](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/baseurl)

# baseURL (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The base URL the context uses for loading extension resources or injecting content into webpages.

## Declaration

```swift
var baseURL: URL { get set }
```

<a id="discussion"></a>

## Discussion

The default value is a unique URL using the `webkit-extension` scheme. The base URL can be set to any URL, but only the scheme and host will be used. The scheme cannot be a scheme that is already supported by [WKWebView](../wkwebview.md) (e.g. http, https, etc.). Setting is only allowed when the context is not loaded.

# baseURL (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The base URL the context uses for loading extension resources or injecting content into webpages.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * baseURL;
```

<a id="discussion"></a>

## Discussion

The default value is a unique URL using the `webkit-extension` scheme. The base URL can be set to any URL, but only the scheme and host will be used. The scheme cannot be a scheme that is already supported by [WKWebView](../wkwebview.md) (e.g. http, https, etc.). Setting is only allowed when the context is not loaded.
