> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnetworkconfigurationprofile/delegate](https://developer.apple.com/documentation/homekit/hmnetworkconfigurationprofile/delegate)

# delegate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A delegate that HomeKit tells about changes in the state of network access.

## Declaration

```swift
weak var delegate: (any HMNetworkConfigurationProfileDelegate)? { get set }
```

## See Also

### Listening for access changes

- [HMNetworkConfigurationProfileDelegate](../hmnetworkconfigurationprofiledelegate.md): An interface that your app adopts to receive notifications about changes in the state of network access.

# delegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A delegate that HomeKit tells about changes in the state of network access.

## Declaration

```objectivec
@property (nonatomic, weak) id<HMNetworkConfigurationProfileDelegate> delegate;
```

## See Also

### Listening for access changes

- [HMNetworkConfigurationProfileDelegate](../hmnetworkconfigurationprofiledelegate.md): An interface that your app adopts to receive notifications about changes in the state of network access.
