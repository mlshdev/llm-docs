> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/services](https://developer.apple.com/documentation/homekit/hmaccessory/services)

# services (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of services provided by the accessory.

## Declaration

```swift
var services: [HMService] { get }
```

## See Also

### Controlling accessory features

- [HMService](../hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.

# services (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of services provided by the accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMService *> * services;
```

## See Also

### Controlling accessory features

- [HMService](../hmservice.md): A controllable feature of an accessory, like a light attached to a garage door opener.
