> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/exclusionpaths](https://developer.apple.com/documentation/appkit/nstextcontainer/exclusionpaths)

# exclusionPaths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An array of path objects that represents the regions where text doesn’t display in the text container.

## Declaration

```swift
var exclusionPaths: [NSBezierPath] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. Depending on the platform, you can assign an array of [NSBezierPath](../nsbezierpath.md) or [UIBezierPath](https://developer.apple.com/documentation/uikit/uibezierpath) objects to exclude text from one or more regions in the text container’s bounds. When the layout manager proposes a line fragment rectangle intersecting one of the regions defined by the exclusion paths, the text container returns an adjusted line fragment rectangle excluding that region.

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# exclusionPaths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An array of path objects that represents the regions where text doesn’t display in the text container.

## Declaration

```objectivec
@property (copy) NSArray<NSBezierPath *> * exclusionPaths;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. Depending on the platform, you can assign an array of [NSBezierPath](../nsbezierpath.md) or [UIBezierPath](https://developer.apple.com/documentation/uikit/uibezierpath) objects to exclude text from one or more regions in the text container’s bounds. When the layout manager proposes a line fragment rectangle intersecting one of the regions defined by the exclusion paths, the text container returns an adjusted line fragment rectangle excluding that region.

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
