> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/seton(_:animated:)](https://developer.apple.com/documentation/uikit/uiswitch/seton(_:animated:))

# setOn(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the state of the switch to the on or off position, optionally animating the transition.

## Declaration

```swift
func setOn(_ on: Bool, animated: Bool)
```

## Parameters

- `on`: [true](https://developer.apple.com/documentation/swift/true) if the switch should be turned to the on position; [false](https://developer.apple.com/documentation/swift/false) if it should be turned to the off position. If the switch is already in the designated position, nothing happens.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the “flipping” of the switch; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Setting the switch to either position doesn’t result in an action message being sent.

## See Also

### Setting the on/off state

- [isOn](ison.md): A Boolean value that determines whether the switch is in the on or off position.

# setOn:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the state of the switch to the on or off position, optionally animating the transition.

## Declaration

```objectivec
- (void) setOn:(BOOL) on animated:(BOOL) animated;
```

## Parameters

- `on`: [true](https://developer.apple.com/documentation/swift/true) if the switch should be turned to the on position; [false](https://developer.apple.com/documentation/swift/false) if it should be turned to the off position. If the switch is already in the designated position, nothing happens.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the “flipping” of the switch; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Setting the switch to either position doesn’t result in an action message being sent.

## See Also

### Setting the on/off state

- [on](ison.md): A Boolean value that determines whether the switch is in the on or off position.
