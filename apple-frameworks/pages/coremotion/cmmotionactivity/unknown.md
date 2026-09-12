> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivity/unknown](https://developer.apple.com/documentation/coremotion/cmmotionactivity/unknown)

# unknown (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 15.0+ · watchOS 2.0+

A Boolean indicating whether the type of motion is unknown.

## Declaration

```swift
var unknown: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) when there is no way to estimate the current type of motion. For example, this property might be [true](https://developer.apple.com/documentation/swift/true) if the device was turned on recently and not enough motion data had been gathered to determine the type of motion.

## See Also

### Getting the Type of Motion

- [stationary](stationary.md): A Boolean indicating whether the device is stationary.
- [walking](walking.md): A Boolean indicating whether the device is on a walking person.
- [running](running.md): A Boolean indicating whether the device is on a running person.
- [automotive](automotive.md): A Boolean indicating whether the device is in an automobile.
- [cycling](cycling.md): A Boolean indicating whether the device is in a bicycle.

# unknown (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 15.0+ · watchOS 2.0+

A Boolean indicating whether the type of motion is unknown.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL unknown;
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) when there is no way to estimate the current type of motion. For example, this property might be [true](https://developer.apple.com/documentation/swift/true) if the device was turned on recently and not enough motion data had been gathered to determine the type of motion.

## See Also

### Getting the Type of Motion

- [stationary](stationary.md): A Boolean indicating whether the device is stationary.
- [walking](walking.md): A Boolean indicating whether the device is on a walking person.
- [running](running.md): A Boolean indicating whether the device is on a running person.
- [automotive](automotive.md): A Boolean indicating whether the device is in an automobile.
- [cycling](cycling.md): A Boolean indicating whether the device is in a bicycle.
