> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmiteratefactorydeviceprofiles](https://developer.apple.com/documentation/applicationservices/cmiteratefactorydeviceprofiles)

# cmIterateFactoryDeviceProfiles

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Iterate profiles registered through the routine `CMSetDeviceFactoryProfiles`. To retrieve all factory profiles for all devices, use `cmIterateFactoryDeviceProfiles` as the flags value when calling `CMIterateDeviceProfiles`. I

## Declaration

```swift
var cmIterateFactoryDeviceProfiles: Int { get }
```
