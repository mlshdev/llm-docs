> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmiteratecustomdeviceprofiles](https://developer.apple.com/documentation/applicationservices/cmiteratecustomdeviceprofiles)

# cmIterateCustomDeviceProfiles

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmIterateCustomDeviceProfiles: Int { get }
```

<a id="discussion"></a>

## Discussion

Iterate profiles that are meant to take the place of the factory profiles, as a result of customization or calibration. To retrieve only custom profiles for all devices, use the `cmIterateCustomDeviceProfiles`, as the flags value when calling `CMIterateDeviceProfiles`.
