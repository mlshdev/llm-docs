> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560091-profile_iteration_values](https://developer.apple.com/documentation/applicationservices/1560091-profile_iteration_values)

# Profile Iteration Values

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify profiles to iterate.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmIterateFactoryDeviceProfiles](1560091-profile_iteration_values/cmiteratefactorydeviceprofiles.md): Iterate profiles registered through the routine `CMSetDeviceFactoryProfiles`. To retrieve all factory profiles for all devices, use `cmIterateFactoryDeviceProfiles` as the flags value when calling `CMIterateDeviceProfiles`. I
- [cmIterateCustomDeviceProfiles](1560091-profile_iteration_values/cmiteratecustomdeviceprofiles.md)
- [cmIterateCurrentDeviceProfiles](1560091-profile_iteration_values/cmiteratecurrentdeviceprofiles.md)
- [cmIterateAllDeviceProfiles](1560091-profile_iteration_values/cmiteratealldeviceprofiles.md): Iterate all profiles, without replacement.
- [cmIterateDeviceProfilesMask](1560091-profile_iteration_values/cmiteratedeviceprofilesmask.md)
