> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/navigationdelegate](https://developer.apple.com/documentation/webkit/wkwebview/navigationdelegate)

# navigationDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object you use to manage navigation behavior for the web view.

## Declaration

```swift
weak var navigationDelegate: (any WKNavigationDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a delegate object when you want to manage or restrict navigation in your web content, track the progress of navigation requests, and handle authentication challenges for any new content. The object you specify must conform to the [WKNavigationDelegate](../wknavigationdelegate.md) protocol.

## See Also

### Managing navigation between webpages

- [WKNavigationDelegate](../wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.

# navigationDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object you use to manage navigation behavior for the web view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<WKNavigationDelegate> navigationDelegate;
```

<a id="Discussion"></a>

## Discussion

Provide a delegate object when you want to manage or restrict navigation in your web content, track the progress of navigation requests, and handle authentication challenges for any new content. The object you specify must conform to the [WKNavigationDelegate](../wknavigationdelegate.md) protocol.

## See Also

### Managing navigation between webpages

- [WKNavigationDelegate](../wknavigationdelegate.md): Methods for accepting or rejecting navigation changes, and for tracking the progress of navigation requests.
