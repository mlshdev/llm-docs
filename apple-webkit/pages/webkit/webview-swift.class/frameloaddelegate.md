> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/frameloaddelegate](https://developer.apple.com/documentation/webkit/webview-swift.class/frameloaddelegate)

# frameLoadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s frame load delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
unowned(unsafe) var frameLoadDelegate: (any WebFrameLoadDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebFrameLoadDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [uiDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.

# frameLoadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s frame load delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebFrameLoadDelegate> frameLoadDelegate;
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebFrameLoadDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [UIDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.
