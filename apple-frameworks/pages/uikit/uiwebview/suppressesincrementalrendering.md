> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/suppressesincrementalrendering](https://developer.apple.com/documentation/uikit/uiwebview/suppressesincrementalrendering)

# suppressesIncrementalRendering (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0)

A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.

## Declaration

```swift
var suppressesIncrementalRendering: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the web view does not attempt to render incoming content as it arrives. Instead, the view’s current contents remain in place until all of the new content has been received, at which point the new content is rendered. This property does not affect the rendering of content retrieved after a frame finishes loading.

The value of this property is [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.

# suppressesIncrementalRendering (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0)

A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.

## Declaration

```objectivec
@property (nonatomic) BOOL suppressesIncrementalRendering;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the web view does not attempt to render incoming content as it arrives. Instead, the view’s current contents remain in place until all of the new content has been received, at which point the new content is rendered. This property does not affect the rendering of content retrieved after a frame finishes loading.

The value of this property is [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Setting web content properties

- [allowsLinkPreview](allowslinkpreview.md): Deprecated. A Boolean value that determines whether pressing on a link displays a preview of the destination for the link.
- [scalesPageToFit](scalespagetofit.md): Deprecated. A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.
- [scrollView](scrollview.md): Deprecated. The scroll view associated with the web view.
- [keyboardDisplayRequiresUserAction](keyboarddisplayrequiresuseraction.md): Deprecated. A Boolean value indicating whether web content can programmatically display the keyboard.
- [dataDetectorTypes](datadetectortypes.md): Deprecated. The types of data converted to clickable URLs in the web view’s content.
