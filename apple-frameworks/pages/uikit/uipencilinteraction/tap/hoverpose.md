> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipencilinteraction/tap/hoverpose

# hoverPose (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

The hover pose of Apple Pencil during a double-tap interaction.

## Declaration

```swift
var hoverPose: UIPencilHoverPose? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if Apple Pencil isn’t close enough to the screen to detect a hover, or if the device doesn’t support hover.

## See Also

### Getting information about a double-tap interaction

- [timestamp](timestamp.md): The timestamp of the double-tap interaction.
- [UIPencilHoverPose](../../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# hoverPose (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

The hover pose of Apple Pencil during a double-tap interaction.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIPencilHoverPose * hoverPose;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if Apple Pencil isn’t close enough to the screen to detect a hover, or if the device doesn’t support hover.

## See Also

### Getting information about a double-tap interaction

- [timestamp](timestamp.md): The timestamp of the double-tap interaction.
- [UIPencilHoverPose](../../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
