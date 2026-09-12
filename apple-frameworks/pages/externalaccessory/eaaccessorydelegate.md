> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorydelegate](https://developer.apple.com/documentation/externalaccessory/eaaccessorydelegate)

# EAAccessoryDelegate (Swift)

**Framework:** External Accessory  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.

## Declaration

```swift
protocol EAAccessoryDelegate : NSObjectProtocol
```

## Topics

### Responding to Disconnection Events

- [accessoryDidDisconnect(\_:)](eaaccessorydelegate/accessorydiddisconnect%28__%29.md): Tells the delegate that the specified accessory was disconnected from the device.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Disconnection Events

- [delegate](eaaccessory/delegate.md): The object that acts as the delegate of the accessory.

# EAAccessoryDelegate (Objective-C)

**Framework:** External Accessory  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.

## Declaration

```objectivec
@protocol EAAccessoryDelegate <NSObject>
```

## Topics

### Responding to Disconnection Events

- [accessoryDidDisconnect:](eaaccessorydelegate/accessorydiddisconnect%28__%29.md): Tells the delegate that the specified accessory was disconnected from the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Disconnection Events

- [delegate](eaaccessory/delegate.md): The object that acts as the delegate of the accessory.
