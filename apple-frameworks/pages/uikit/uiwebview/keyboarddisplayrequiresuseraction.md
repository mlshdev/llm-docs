> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/keyboarddisplayrequiresuseraction](https://developer.apple.com/documentation/uikit/uiwebview/keyboarddisplayrequiresuseraction)

# keyboardDisplayRequiresUserAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0)

A Boolean value indicating whether web content can programmatically display the keyboard.

## Declaration

```swift
var keyboardDisplayRequiresUserAction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the user must explicitly tap the elements in the web view to display the keyboard (or other relevant input view) for that element. When set to [false](https://developer.apple.com/documentation/swift/false), a focus event on an element causes the input view to be displayed and associated with that element automatically.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

# keyboardDisplayRequiresUserAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0)

A Boolean value indicating whether web content can programmatically display the keyboard.

## Declaration

```objectivec
@property (nonatomic) BOOL keyboardDisplayRequiresUserAction;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the user must explicitly tap the elements in the web view to display the keyboard (or other relevant input view) for that element. When set to [false](https://developer.apple.com/documentation/swift/false), a focus event on an element causes the input view to be displayed and associated with that element automatically.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [suppressesIncrementalRendering](suppressesincrementalrendering.md): Deprecated. A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.
