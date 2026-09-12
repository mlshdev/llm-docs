> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/downloaddelegate](https://developer.apple.com/documentation/webkit/webview-swift.class/downloaddelegate)

# downloadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s download delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
unowned(unsafe) var downloadDelegate: (any WebDownloadDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Implements the [WebDownload](../webdownload.md) protocol.

WebKit may create `WebDownload` objects automatically to handle downloads that start with a webpage or link.

## See Also

### Getting and Setting Delegates

- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [uiDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.

# downloadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s download delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebDownloadDelegate> downloadDelegate;
```

<a id="Discussion"></a>

## Discussion

Implements the [WebDownload](../webdownload.md) protocol.

WebKit may create `WebDownload` objects automatically to handle downloads that start with a webpage or link.

## See Also

### Getting and Setting Delegates

- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [UIDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.
