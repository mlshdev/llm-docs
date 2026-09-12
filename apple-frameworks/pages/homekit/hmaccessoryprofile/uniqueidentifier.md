> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessoryprofile/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmaccessoryprofile/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for the profile.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Getting information about a profile

- [accessory](accessory.md): The accessory that implements this profile.
- [services](services.md): An array of services that represents this profile.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for the profile.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Getting information about a profile

- [accessory](accessory.md): The accessory that implements this profile.
- [services](services.md): An array of services that represents this profile.
