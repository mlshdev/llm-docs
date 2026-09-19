> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessoryprofile/accessory

# accessory (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accessory that implements this profile.

## Declaration

```swift
weak var accessory: HMAccessory? { get }
```

## See Also

### Getting information about a profile

- [services](services.md): An array of services that represents this profile.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the profile.

# accessory (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accessory that implements this profile.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) HMAccessory * accessory;
```

## See Also

### Getting information about a profile

- [services](services.md): An array of services that represents this profile.
- [uniqueIdentifier](uniqueidentifier.md): A unique identifier for the profile.
