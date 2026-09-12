> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/size](https://developer.apple.com/documentation/appkit/nstextcontainer/size)

# size (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The size of the text container’s bounding rectangle.

## Declaration

```swift
var size: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the maximum size for the layout area returned from [lineFragmentRect(forProposedRect:at:writingDirection:remaining:)](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md). A value of `0.0` or less means no limitation.

If you don’t specify an explicit size when you initialize a text container, the system uses a default large size of (`10000000.0`, `10000000.0`).

## See Also

### Defining the container shape

- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.

# size (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The size of the text container’s bounding rectangle.

## Declaration

```objectivec
@property CGSize size;
```

<a id="Discussion"></a>

## Discussion

This property defines the maximum size for the layout area returned from [lineFragmentRectForProposedRect:atIndex:writingDirection:remainingRect:](linefragmentrect%28forproposedrect_at_writingdirection_remaining_%29.md). A value of `0.0` or less means no limitation.

If you don’t specify an explicit size when you initialize a text container, the system uses a default large size of (`10000000.0`, `10000000.0`).

## See Also

### Defining the container shape

- [exclusionPaths](exclusionpaths.md): An array of path objects that represents the regions where text doesn’t display in the text container.
- [lineBreakMode](linebreakmode.md): The behavior of the last line inside the text container.
- [widthTracksTextView](widthtrackstextview.md): A Boolean that controls whether the text container adjusts the width of its bounding rectangle when its text view resizes.
- [heightTracksTextView](heighttrackstextview.md): A Boolean that controls whether the text container adjusts the height of its bounding rectangle when its text view resizes.
