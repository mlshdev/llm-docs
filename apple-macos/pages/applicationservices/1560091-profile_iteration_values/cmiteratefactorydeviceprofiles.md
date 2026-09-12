> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560091-profile_iteration_values/cmiteratefactorydeviceprofiles](https://developer.apple.com/documentation/applicationservices/1560091-profile_iteration_values/cmiteratefactorydeviceprofiles)

# cmIterateFactoryDeviceProfiles

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Iterate profiles registered through the routine `CMSetDeviceFactoryProfiles`. To retrieve all factory profiles for all devices, use `cmIterateFactoryDeviceProfiles` as the flags value when calling `CMIterateDeviceProfiles`. I

## Declaration

```objectivec
cmIterateFactoryDeviceProfiles = 0x00000001
```
