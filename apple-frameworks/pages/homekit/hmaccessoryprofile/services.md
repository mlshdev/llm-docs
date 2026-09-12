> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessoryprofile/services](https://developer.apple.com/documentation/homekit/hmaccessoryprofile/services)

# services (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of services that represents this profile.

## Declaration

```swift
var services: [HMService] { get }
```

## See Also

### Getting information about a profile

- [accessory](accessory.md): The accessory that implements this profile.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the profile.

# services (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of services that represents this profile.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<HMService *> * services;
```

## See Also

### Getting information about a profile

- [accessory](accessory.md): The accessory that implements this profile.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the profile.
