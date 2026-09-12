> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/digitalcrownaccessory(_:)](https://developer.apple.com/documentation/swiftui/view/digitalcrownaccessory(_:))

# digitalCrownAccessory(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

Specifies the visibility of Digital Crown accessory Views on Apple Watch.

## Declaration

```swift
nonisolated func digitalCrownAccessory(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: The visibility of the digital crown accessory.

<a id="discussion"></a>

## Discussion

Use this method to customize the visibility of a Digital Crown accessory `View` created with the `View/digitalCrownAccessory(_ content:)` modifier. You may want to keep an accessory visible even when the Digital Crown Indicator is not visible to indicate what scrolling the crown will do.

## See Also

### Interacting with the Digital Crown

- [digitalCrownAccessory(content:)](digitalcrownaccessory%28content_%29.md): Places an accessory View next to the Digital Crown on Apple Watch.
- [digitalCrownRotation(\_:from:through:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](digitalcrownrotation%28__from_through_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:onChange:onIdle:)](digitalcrownrotation%28__onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](digitalcrownrotation%28detent_from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:)](digitalcrownrotation%28__%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:)](digitalcrownrotation%28__from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [DigitalCrownEvent](../digitalcrownevent.md): An event emitted when the user rotates the Digital Crown.
- [DigitalCrownRotationalSensitivity](../digitalcrownrotationalsensitivity.md): The amount of Digital Crown rotation needed to move between two integer numbers.
