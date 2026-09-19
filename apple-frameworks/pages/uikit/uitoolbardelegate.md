> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitoolbardelegate

# UIToolbarDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface that toolbar delegate objects implement to manage the toolbar behavior.

## Declaration

```swift
@MainActor protocol UIToolbarDelegate : UIBarPositioningDelegate
```

<a id="overview"></a>

## Overview

This protocol declares no methods of its own, but conforms to the [UIBarPositioningDelegate](uibarpositioningdelegate.md) protocol to support the positioning of a toolbar when it’s moved to a window.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Managing toolbar changes

- [delegate](uitoolbar/delegate.md): The toolbar’s delegate object.

# UIToolbarDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface that toolbar delegate objects implement to manage the toolbar behavior.

## Declaration

```objectivec
@protocol UIToolbarDelegate <UIBarPositioningDelegate>
```

<a id="overview"></a>

## Overview

This protocol declares no methods of its own, but conforms to the [UIBarPositioningDelegate](uibarpositioningdelegate.md) protocol to support the positioning of a toolbar when it’s moved to a window.

## Relationships

### Inherits From

- [UIBarPositioningDelegate](uibarpositioningdelegate.md)

## See Also

### Managing toolbar changes

- [delegate](uitoolbar/delegate.md): The toolbar’s delegate object.
