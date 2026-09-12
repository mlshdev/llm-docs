> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/widthtrackstextview](https://developer.apple.com/documentation/uikit/nstextcontainer/widthtrackstextview)

# widthTracksTextView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.

## Declaration

```swift
var widthTracksTextView: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the text container adjusts its width when the width of its text view changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

For more information about size tracking, see [Text System Storage Layer Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextStorageLayer/TextStorageLayer.html#//apple_ref/doc/uid/10000087i).

## See Also

### Related Documentation

- [containerSize](https://developer.apple.com/documentation/appkit/nstextcontainer/containersize): Deprecated. The size of the text container’s bounding rectangle.

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# widthTracksTextView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.

## Declaration

```objectivec
@property (nonatomic) BOOL widthTracksTextView;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the text container adjusts its width when the width of its text view changes. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

For more information about size tracking, see [Text System Storage Layer Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextStorageLayer/TextStorageLayer.html#//apple_ref/doc/uid/10000087i).

## See Also

### Related Documentation

- [containerSize](https://developer.apple.com/documentation/appkit/nstextcontainer/containersize): Deprecated. The size of the text container’s bounding rectangle.

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
