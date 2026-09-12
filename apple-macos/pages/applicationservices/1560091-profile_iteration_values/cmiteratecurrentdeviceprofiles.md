> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560091-profile_iteration_values/cmiteratecurrentdeviceprofiles](https://developer.apple.com/documentation/applicationservices/1560091-profile_iteration_values/cmiteratecurrentdeviceprofiles)

# cmIterateCurrentDeviceProfiles

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmIterateCurrentDeviceProfiles = 0x00000003
```

<a id="discussion"></a>

## Discussion

Iterate profiles registered through the routing `CMSetDeviceProfiles`. To get the profiles in use for all devices, use `cmIterateCurrentDeviceProfiles` as the flags value. This will replace the factory profiles with any overrides, yielding the currently used set.I
