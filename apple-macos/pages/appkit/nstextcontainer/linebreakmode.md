> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/linebreakmode](https://developer.apple.com/documentation/appkit/nstextcontainer/linebreakmode)

# lineBreakMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The behavior of the last line inside the text container.

## Declaration

```objectivec
@property NSLineBreakMode lineBreakMode;
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
