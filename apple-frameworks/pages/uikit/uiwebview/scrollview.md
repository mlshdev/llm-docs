> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/scrollview](https://developer.apple.com/documentation/uikit/uiwebview/scrollview)

# scrollView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · Mac Catalyst 5.0+ (deprecated in 12.0)

The scroll view associated with the web view.

## Declaration

```swift
var scrollView: UIScrollView { get }
```

<a id="Discussion"></a>

## Discussion

Your app can access the scroll view if it wants to customize the scrolling behavior of the web view.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

# scrollView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0)

The scroll view associated with the web view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIScrollView * scrollView;
```

<a id="Discussion"></a>

## Discussion

Your app can access the scroll view if it wants to customize the scrolling behavior of the web view.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.
