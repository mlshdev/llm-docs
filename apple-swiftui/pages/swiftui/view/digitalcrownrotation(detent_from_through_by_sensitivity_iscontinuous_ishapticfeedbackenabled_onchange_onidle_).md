> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/digitalcrownrotation(detent:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:)](https://developer.apple.com/documentation/swiftui/view/digitalcrownrotation(detent:from:through:by:sensitivity:iscontinuous:ishapticfeedbackenabled:onchange:onidle:))

# digitalCrownRotation(detent:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

Tracks Digital Crown rotations by updating the specified binding.

## Declaration

```swift
nonisolated func digitalCrownRotation<V>(detent: Binding<V>, from minValue: V, through maxValue: V, by stride: V.Stride, sensitivity: DigitalCrownRotationalSensitivity = .high, isContinuous: Bool = false, isHapticFeedbackEnabled: Bool = true, onChange: @escaping (DigitalCrownEvent) -> Void = { _ in }, onIdle: @escaping () -> Void = { }) -> some View where V : BinaryFloatingPoint, V.Stride : BinaryFloatingPoint

```

## Parameters

- `detent`: A binding to a value that updates when the user rotates the  Digital Crown.
- `minValue`: Lower end of the range reported.
- `maxValue`: Upper end of the range reported.
- `stride`: The value settles on multiples of `stride`.
- `sensitivity`: How much the user needs to rotate the  Digital Crown to move between two detents.
- `isContinuous`: Controls if the value reported stops at `minValue` and `maxValue`, or if it should wrap around. Default is `false`.
- `isHapticFeedbackEnabled`: Controls the generation of haptic feedback when turning the Digital Crown. Default is `true`.
- `onChange`: A block that is called as the Digital Crown is rotated.
- `onIdle`: A block that is called when the Digital Crown has settled to an idle state.

<a id="discussion"></a>

## Discussion

Use this method to receive values on a binding you provide as the user turns the Digital Crown on Apple Watch. The example below receives changes to the binding value, starting at the `minValue` of  `0.0`  up to the `maxValue` of `10.0` in steps of `0.1` incrementing or decrementing depending on the direction that the user turns the Digital Crown, rolling over if the user exceeds the specified boundary values. The binding will always be updated to a value that is a multiple of the stride that is provided:

```swift
struct DigitalCrown: View {
    @State private var crownValue = 0.0
    @State private var selected = 0.0
    @State private var minValue = 0.0
    @State private var maxValue = 10.0
    @State private var stepAmount = 0.1
    @State private var velocity = 0.0
    @State private var isIdle = true

    var body: some View {
        Text("Received Value:\(crownValue, specifier: "%.2f")")
            .focusable()
            .digitalCrownRotation(detent: $selected,
                                  from: minValue,
                                  through: maxValue,
                                  by: stepAmount,
                                  sensitivity: .low,
                                  isContinuous: true
            ) { crownEvent in
                isIdle = false
                crownValue = crownEvent.offset
                velocity = crownEvent.velocity
            } onIdle: {
                isIdle = true
            }
    }
}
```

![A screenshot showing a value received by turning the Digital Crown](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-digitalCrownRotationBindingFull@2x.png)

## See Also

### Interacting with the Digital Crown

- [digitalCrownAccessory(\_:)](digitalcrownaccessory%28__%29.md): Specifies the visibility of Digital Crown accessory Views on Apple Watch.
- [digitalCrownAccessory(content:)](digitalcrownaccessory%28content_%29.md): Places an accessory View next to the Digital Crown on Apple Watch.
- [digitalCrownRotation(\_:from:through:sensitivity:isContinuous:isHapticFeedbackEnabled:onChange:onIdle:)](digitalcrownrotation%28__from_through_sensitivity_iscontinuous_ishapticfeedbackenabled_onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:onChange:onIdle:)](digitalcrownrotation%28__onchange_onidle_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:)](digitalcrownrotation%28__%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [digitalCrownRotation(\_:from:through:by:sensitivity:isContinuous:isHapticFeedbackEnabled:)](digitalcrownrotation%28__from_through_by_sensitivity_iscontinuous_ishapticfeedbackenabled_%29.md): Tracks Digital Crown rotations by updating the specified binding.
- [DigitalCrownEvent](../digitalcrownevent.md): An event emitted when the user rotates the Digital Crown.
- [DigitalCrownRotationalSensitivity](../digitalcrownrotationalsensitivity.md): The amount of Digital Crown rotation needed to move between two integer numbers.
