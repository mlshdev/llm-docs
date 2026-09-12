> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/datadetectortypes](https://developer.apple.com/documentation/uikit/uiwebview/datadetectortypes)

# dataDetectorTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 3.0+ (deprecated in 12.0)

The types of data converted to clickable URLs in the web view’s content.

## Declaration

```swift
var dataDetectorTypes: UIDataDetectorTypes { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the types of data (phone numbers, HTTP links, email address, and so on) that should be automatically converted to clickable URLs in the web view. When clicked, the web view opens the app responsible for handling the URL type and passes it the URL.

See the [UIDataDetectorTypes](../uidatadetectortypes.md) enumeration for the types of data available for automatic detection.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.

# dataDetectorTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0)

The types of data converted to clickable URLs in the web view’s content.

## Declaration

```objectivec
@property (nonatomic) UIDataDetectorTypes dataDetectorTypes;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the types of data (phone numbers, HTTP links, email address, and so on) that should be automatically converted to clickable URLs in the web view. When clicked, the web view opens the app responsible for handling the URL type and passes it the URL.

See the [UIDataDetectorTypes](../uidatadetectortypes.md) enumeration for the types of data available for automatic detection.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
