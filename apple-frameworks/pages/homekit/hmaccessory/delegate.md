> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/delegate](https://developer.apple.com/documentation/homekit/hmaccessory/delegate)

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the state of the accessory.

## Declaration

```swift
weak var delegate: (any HMAccessoryDelegate)? { get set }
```

## See Also

### Tracking changes to an accessory

- [HMAccessoryDelegate](../hmaccessorydelegate.md): A set of methods that defines the communication method for state updates from accessories to their delegates.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate that receives updates on the state of the accessory.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<HMAccessoryDelegate> delegate;
```

## See Also

### Tracking changes to an accessory

- [HMAccessoryDelegate](../hmaccessorydelegate.md): A set of methods that defines the communication method for state updates from accessories to their delegates.
