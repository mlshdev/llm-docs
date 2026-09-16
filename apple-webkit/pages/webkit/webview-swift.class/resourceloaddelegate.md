> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webview-swift.class/resourceloaddelegate

# resourceLoadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s resource load delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
unowned(unsafe) var resourceLoadDelegate: (any WebResourceLoadDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebResourceLoadDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [uiDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.

# resourceLoadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s resource load delegate.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebResourceLoadDelegate> resourceLoadDelegate;
```

<a id="Discussion"></a>

## Discussion

Conforms to the WebResourceLoadDelegate protocol.

## See Also

### Getting and Setting Delegates

- [downloadDelegate](downloaddelegate.md): Deprecated. The receiver’s download delegate.
- [frameLoadDelegate](frameloaddelegate.md): Deprecated. The receiver’s frame load delegate.
- [policyDelegate](policydelegate.md): Deprecated. The receiver’s policy delegate.
- [UIDelegate](uidelegate.md): Deprecated. The receiver’s user interface delegate.
