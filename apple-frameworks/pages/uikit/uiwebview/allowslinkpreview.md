> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/allowslinkpreview](https://developer.apple.com/documentation/uikit/uiwebview/allowslinkpreview)

# allowsLinkPreview (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 12.0) · iPadOS 9.0+ (deprecated in 12.0) · Mac Catalyst 9.0+ (deprecated in 12.0)

A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.

## Declaration

```swift
var allowsLinkPreview: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property is available on devices that support 3D Touch. Default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this value to [true](https://developer.apple.com/documentation/swift/true) for a web view, users (with devices that support 3D Touch) can preview link destinations, and can preview detected data such as addresses, by pressing on links. Such previews are known to users as *peeks*. If a user presses deeper, the preview navigates (or *pops*, in user terminology) to the destination. Because pop navigation switches the user from your app to Safari, it is opt-in, by way of this property, rather default behavior for this class.

If you want to support link preview but also want to keep users within your app, you can switch from using the [UIWebView](../uiwebview.md) class to the [SFSafariViewController](../../safariservices/sfsafariviewcontroller.md) class. If you are using a web view as an in-app browser, making this change is best practice. The Safari view controller class automatically supports link previews.

## See Also

### Setting web content properties

- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

# allowsLinkPreview (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 12.0) · iPadOS 9.0+ (deprecated in 12.0)

A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsLinkPreview;
```

<a id="Discussion"></a>

## Discussion

This property is available on devices that support 3D Touch. Default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this value to [true](https://developer.apple.com/documentation/swift/true) for a web view, users (with devices that support 3D Touch) can preview link destinations, and can preview detected data such as addresses, by pressing on links. Such previews are known to users as *peeks*. If a user presses deeper, the preview navigates (or *pops*, in user terminology) to the destination. Because pop navigation switches the user from your app to Safari, it is opt-in, by way of this property, rather default behavior for this class.

If you want to support link preview but also want to keep users within your app, you can switch from using the [UIWebView](../uiwebview.md) class to the [SFSafariViewController](../../safariservices/sfsafariviewcontroller.md) class. If you are using a web view as an in-app browser, making this change is best practice. The Safari view controller class automatically supports link previews.

## See Also

### Setting web content properties

- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.
