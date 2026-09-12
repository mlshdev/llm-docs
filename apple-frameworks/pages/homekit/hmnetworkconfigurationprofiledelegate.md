> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnetworkconfigurationprofiledelegate](https://developer.apple.com/documentation/homekit/hmnetworkconfigurationprofiledelegate)

# HMNetworkConfigurationProfileDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that your app adopts to receive notifications about changes in the state of network access.

## Declaration

```swift
protocol HMNetworkConfigurationProfileDelegate : NSObjectProtocol
```

## Topics

### Observing network access changes

- [profileDidUpdateNetworkAccessMode(\_:)](hmnetworkconfigurationprofiledelegate/profiledidupdatenetworkaccessmode%28__%29.md): Tells the delegate that the network access mode has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Listening for access changes

- [delegate](hmnetworkconfigurationprofile/delegate.md): A delegate that HomeKit tells about changes in the state of network access.

# HMNetworkConfigurationProfileDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that your app adopts to receive notifications about changes in the state of network access.

## Declaration

```objectivec
@protocol HMNetworkConfigurationProfileDelegate <NSObject>
```

## Topics

### Observing network access changes

- [profileDidUpdateNetworkAccessMode:](hmnetworkconfigurationprofiledelegate/profiledidupdatenetworkaccessmode%28__%29.md): Tells the delegate that the network access mode has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Listening for access changes

- [delegate](hmnetworkconfigurationprofile/delegate.md): A delegate that HomeKit tells about changes in the state of network access.
