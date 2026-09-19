> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipreviewinteraction/cancel()

# cancel() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Cancels the current preview interaction.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

When a preview interaction is in progress, use this method to cancel it, preventing any further callbacks to the delegate methods.

## See Also

### Handling preview interactions

- [view](view.md): The view from which the preview interaction receives touch events.
- [location(in:)](location%28in_%29.md): Returns the location of the touch that started the interaction.

# cancelInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Cancels the current preview interaction.

## Declaration

```objectivec
- (void) cancelInteraction;
```

<a id="Discussion"></a>

## Discussion

When a preview interaction is in progress, use this method to cancel it, preventing any further callbacks to the delegate methods.

## See Also

### Handling preview interactions

- [view](view.md): The view from which the preview interaction receives touch events.
- [locationInCoordinateSpace:](location%28in_%29.md): Returns the location of the touch that started the interaction.
