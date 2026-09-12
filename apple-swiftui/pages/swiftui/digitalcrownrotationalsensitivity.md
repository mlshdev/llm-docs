> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/digitalcrownrotationalsensitivity](https://developer.apple.com/documentation/swiftui/digitalcrownrotationalsensitivity)

# DigitalCrownRotationalSensitivity

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The amount of Digital Crown rotation needed to move between two integer numbers.

## Declaration

```swift
enum DigitalCrownRotationalSensitivity
```

<a id="overview"></a>

## Overview

You may need to experiment to find the level of sensitivity that works for your use case.

## Topics

### Getting sensitivity options

- [DigitalCrownRotationalSensitivity.low](digitalcrownrotationalsensitivity/low.md): Low sensitivity.
- [DigitalCrownRotationalSensitivity.medium](digitalcrownrotationalsensitivity/medium.md): Medium sensitivity.
- [DigitalCrownRotationalSensitivity.high](digitalcrownrotationalsensitivity/high.md): High sensitivity.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [DigitalCrownEvent](digitalcrownevent.md): An event emitted when the user rotates the Digital Crown.
