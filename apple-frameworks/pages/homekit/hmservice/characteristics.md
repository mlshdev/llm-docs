> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/characteristics](https://developer.apple.com/documentation/homekit/hmservice/characteristics)

# characteristics (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of characteristics for the service.

## Declaration

```swift
var characteristics: [HMCharacteristic] { get }
```

## See Also

### Getting service characteristics

- [HMCharacteristic](../hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.

# characteristics (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of characteristics for the service.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMCharacteristic *> * characteristics;
```

## See Also

### Getting service characteristics

- [HMCharacteristic](../hmcharacteristic.md): A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
