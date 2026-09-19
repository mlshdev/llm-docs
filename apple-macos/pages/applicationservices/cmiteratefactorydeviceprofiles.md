> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmiteratefactorydeviceprofiles

# cmIterateFactoryDeviceProfiles

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Iterate profiles registered through the routine `CMSetDeviceFactoryProfiles`. To retrieve all factory profiles for all devices, use `cmIterateFactoryDeviceProfiles` as the flags value when calling `CMIterateDeviceProfiles`. I

## Declaration

```swift
var cmIterateFactoryDeviceProfiles: Int { get }
```
