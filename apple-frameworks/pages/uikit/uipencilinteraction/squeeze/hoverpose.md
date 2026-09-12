> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteraction/squeeze/hoverpose](https://developer.apple.com/documentation/uikit/uipencilinteraction/squeeze/hoverpose)

# hoverPose (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

The hover pose of Apple Pencil during a squeeze interaction.

## Declaration

```swift
var hoverPose: UIPencilHoverPose? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if Apple Pencil isn’t close enough to the screen to detect a hover, or if the device doesn’t support hover.

## See Also

### Getting information about a squeeze interaction

- [timestamp](timestamp.md): The timestamp of the squeeze interaction.
- [phase](phase.md): The phase of a squeeze interaction on Apple Pencil.
- [UIPencilInteraction.Phase](../phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](../../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# hoverPose (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

The hover pose of Apple Pencil during a squeeze interaction.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIPencilHoverPose * hoverPose;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if Apple Pencil isn’t close enough to the screen to detect a hover, or if the device doesn’t support hover.

## See Also

### Getting information about a squeeze interaction

- [timestamp](timestamp.md): The timestamp of the squeeze interaction.
- [phase](phase.md): The phase of a squeeze interaction on Apple Pencil.
- [UIPencilInteractionPhase](../phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](../../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
