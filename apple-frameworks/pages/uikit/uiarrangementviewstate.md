> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewstate

# UIArrangementViewState

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

The state of a view within an arrangement.

## Declaration

```objectivec
@interface UIArrangementViewState : NSObject
```

## Topics

### Getting the state

- [hidden](uiarrangementviewstate/hidden.md): Whether the view is hidden in the arrangement.
- [splitAxis](uiarrangementviewstate/splitaxis.md): The axis of the split for the view within a split arrangement.
- [zIndex](uiarrangementviewstate/zindex.md): The z-index of the view within the arrangement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Getting view state

- [stateForPlacement:](uiarrangementviewcontroller/stateforplacement_.md): Returns the arrangement view state for a placement.
