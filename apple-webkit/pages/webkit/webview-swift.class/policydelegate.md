> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/policydelegate](https://developer.apple.com/documentation/webkit/webview-swift.class/policydelegate)

# policyDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s policy delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
unowned(unsafe) var policyDelegate: (any WebPolicyDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebPolicyDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [uiDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.

# policyDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s policy delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebPolicyDelegate> policyDelegate;
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebPolicyDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [resourceLoadDelegate](resourceloaddelegate.md): Deprecated. The receiver’s resource load delegate.
- [UIDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.
