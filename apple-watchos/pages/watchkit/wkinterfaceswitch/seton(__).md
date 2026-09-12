> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceswitch/seton(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceswitch/seton(_:))

# setOn(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the state of the switch to the specified value.

## Declaration

```swift
func setOn(_ on: Bool)
```

## Parameters

- `on`: A Boolean value indicating whether the switch should be set to the On or Off state. Specify [true](https://developer.apple.com/documentation/swift/true) to set the switch to the On state.

<a id="Discussion"></a>

## Discussion

Use this method to set the value of a switch. If you want to know the value of a switch, use a local variable to track that information.

## See Also

### Configuring the Switch

- [setColor(\_:)](setcolor%28__%29.md): Changes the tint color of the switch when it is on.

# setOn: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the state of the switch to the specified value.

## Declaration

```objectivec
- (void) setOn:(BOOL) on;
```

## Parameters

- `on`: A Boolean value indicating whether the switch should be set to the On or Off state. Specify [true](https://developer.apple.com/documentation/swift/true) to set the switch to the On state.

<a id="Discussion"></a>

## Discussion

Use this method to set the value of a switch. If you want to know the value of a switch, use a local variable to track that information.

## See Also

### Configuring the Switch

- [setColor:](setcolor%28__%29.md): Changes the tint color of the switch when it is on.
