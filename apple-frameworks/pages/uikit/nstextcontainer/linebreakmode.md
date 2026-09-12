> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/linebreakmode](https://developer.apple.com/documentation/uikit/nstextcontainer/linebreakmode)

# lineBreakMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The behavior of the last line inside the text container.

## Declaration

```swift
var lineBreakMode: NSLineBreakMode { get set }
```

<a id="Discussion"></a>

## Discussion

The [NSLineBreakMode](../nslinebreakmode.md) constants specify what happens when a line is too long for its container. For example, wrapping can occur on word boundaries (the default) or character boundaries, or the line can be clipped or truncated. The default value of this property is [NSLineBreakMode.byWordWrapping](../nslinebreakmode/bywordwrapping.md).

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# lineBreakMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The behavior of the last line inside the text container.

## Declaration

```objectivec
@property (nonatomic) NSLineBreakMode lineBreakMode;
```

<a id="Discussion"></a>

## Discussion

The [NSLineBreakMode](../nslinebreakmode.md) constants specify what happens when a line is too long for its container. For example, wrapping can occur on word boundaries (the default) or character boundaries, or the line can be clipped or truncated. The default value of this property is [NSLineBreakByWordWrapping](../nslinebreakmode/bywordwrapping.md).

## See Also

### Defining the container shape

- [size](size.md): The size of the text container’s bounding rectangle.
- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
