> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmiteratecurrentdeviceprofiles](https://developer.apple.com/documentation/applicationservices/cmiteratecurrentdeviceprofiles)

# cmIterateCurrentDeviceProfiles

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmIterateCurrentDeviceProfiles: Int { get }
```

<a id="discussion"></a>

## Discussion

Iterate profiles registered through the routing `CMSetDeviceProfiles`. To get the profiles in use for all devices, use `cmIterateCurrentDeviceProfiles` as the flags value. This will replace the factory profiles with any overrides, yielding the currently used set.I
