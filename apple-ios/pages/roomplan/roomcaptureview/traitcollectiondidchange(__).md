> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureview/traitcollectiondidchange(_:)](https://developer.apple.com/documentation/roomplan/roomcaptureview/traitcollectiondidchange(_:))

# traitCollectionDidChange(\_:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Notifies the view when the device orientation changes.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?)
```

## Parameters

- `previousTraitCollection`: The prior state of the trait collection before the change occurs.

<a id="Overview"></a>

## Overview

This property inherits from [UIView](https://developer.apple.com/documentation/uikit/uiview).

## See Also

### Accessing view features

- [subviews](subviews.md): An array that contains the view’s subviews.
- [layoutSubviews()](layoutsubviews%28%29.md): Instructs the view’s subviews to position within the view.
- [encode(with:)](encode%28with_%29.md): Serializes the view to the specified coder.
