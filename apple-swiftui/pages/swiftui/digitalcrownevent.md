> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/digitalcrownevent](https://developer.apple.com/documentation/swiftui/digitalcrownevent)

# DigitalCrownEvent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 9.0+

An event emitted when the user rotates the Digital Crown.

## Declaration

```swift
struct DigitalCrownEvent
```

<a id="overview"></a>

## Overview

Use the [digitalCrownRotation(\_:)](view/digitalcrownrotation%28__%29.md) modifier to receive these events.

## Topics

### Getting events

- [offset](digitalcrownevent/offset.md): The offset of the digital crown when this event was sent.
- [velocity](digitalcrownevent/velocity.md): The velocity at which the offset was changing when this event was sent.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with the Digital Crown

- [digitalCrownAccessory(\_:)](view/digitalcrownaccessory%28__%29.md): Specifies the visibility of Digital Crown accessory Views on Apple Watch.
- [digitalCrownAccessory(content:)](view/digitalcrownaccessory%28content_%29.md): Places an accessory View next to the Digital Crown on Apple Watch.
- [digitalCrownRotation(\_:from:through:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](view/digitalcrownrotation%28__from_through_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:onChange:onIdle:)](view/digitalcrownrotation%28__onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](view/digitalcrownrotation%28detent_from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:)](view/digitalcrownrotation%28__%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:)](view/digitalcrownrotation%28__from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [DigitalCrownRotationalSensitivity](digitalcrownrotationalsensitivity.md): The amount of Digital Crown rotation needed to move between two integer numbers.
