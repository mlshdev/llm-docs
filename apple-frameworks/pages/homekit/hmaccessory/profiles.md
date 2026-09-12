> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/profiles](https://developer.apple.com/documentation/homekit/hmaccessory/profiles)

# profiles (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of profiles implemented by the accessory.

## Declaration

```swift
var profiles: [HMAccessoryProfile] { get }
```

## See Also

### Managing accessory profiles

- [HMAccessoryProfile](../hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](../hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](../hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

# profiles (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of profiles implemented by the accessory.

## Declaration

```objectivec
@property (copy, readonly) NSArray<HMAccessoryProfile *> * profiles;
```

## See Also

### Managing accessory profiles

- [HMAccessoryProfile](../hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](../hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](../hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
