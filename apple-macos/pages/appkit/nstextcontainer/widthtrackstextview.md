> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/widthtrackstextview](https://developer.apple.com/documentation/appkit/nstextcontainer/widthtrackstextview)

# widthTracksTextView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.

## Declaration

```swift
var widthTracksTextView: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the text container adjusts its width when the width of its text view changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

For more information, see [NSTextContainer](../nstextcontainer.md).

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# widthTracksTextView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.

## Declaration

```objectivec
@property BOOL widthTracksTextView;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the text container adjusts its width when the width of its text view changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

For more information, see [NSTextContainer](../nstextcontainer.md).

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
