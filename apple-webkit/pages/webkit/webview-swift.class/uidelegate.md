> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/uidelegate](https://developer.apple.com/documentation/webkit/webview-swift.class/uidelegate)

# uiDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s user interface delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
unowned(unsafe) var uiDelegate: (any WebUIDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

A user interface delegate that conforms to the WebUIDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.

# UIDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s user interface delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebUIDelegate> UIDelegate;
```

<a id="Discussion"></a>

## Discussion

A user interface delegate that conforms to the WebUIDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
