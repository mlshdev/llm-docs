> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsession/animatestostartingpositionsoncancelorfail](https://developer.apple.com/documentation/appkit/nsdraggingsession/animatestostartingpositionsoncancelorfail)

# animatesToStartingPositionsOnCancelOrFail (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.

## Declaration

```swift
var animatesToStartingPositionsOnCancelOrFail: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property should be set immediately after creating the dragging session.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Dragging Visual Representation

- [draggingFormation](draggingformation.md): Controls the dragging formation when the drag is not over the source or a valid destination.

# animatesToStartingPositionsOnCancelOrFail (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.

## Declaration

```objectivec
@property BOOL animatesToStartingPositionsOnCancelOrFail;
```

<a id="Discussion"></a>

## Discussion

This property should be set immediately after creating the dragging session.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Dragging Visual Representation

- [draggingFormation](draggingformation.md): Controls the dragging formation when the drag is not over the source or a valid destination.
