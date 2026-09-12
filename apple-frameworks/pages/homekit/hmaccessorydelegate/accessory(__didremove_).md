> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorydelegate/accessory(_:didremove:)](https://developer.apple.com/documentation/homekit/hmaccessorydelegate/accessory(_:didremove:))

# accessory(\_:didRemove:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Informs the delegate when a profile is removed from an accessory.

## Declaration

```swift
optional func accessory(_ accessory: HMAccessory, didRemove profile: HMAccessoryProfile)
```

## Parameters

- `accessory`: The accessory from which the profile is removed.
- `profile`: The removed profile.

## See Also

### Observing accessories

- [accessoryDidUpdateName(\_:)](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability(\_:)](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices(\_:)](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory(\_:didUpdateNameFor:)](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory(\_:service:didUpdateValueFor:)](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory(\_:didUpdateAssociatedServiceTypeFor:)](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory(\_:didAdd:)](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory(\_:didUpdateFirmwareVersion:)](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

# accessory:didRemoveProfile: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Informs the delegate when a profile is removed from an accessory.

## Declaration

```objectivec
- (void) accessory:(HMAccessory *) accessory didRemoveProfile:(HMAccessoryProfile *) profile;
```

## Parameters

- `accessory`: The accessory from which the profile is removed.
- `profile`: The removed profile.

## See Also

### Observing accessories

- [accessoryDidUpdateName:](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability:](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices:](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory:didUpdateNameForService:](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory:service:didUpdateValueForCharacteristic:](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory:didUpdateAssociatedServiceTypeForService:](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory:didAddProfile:](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory:didUpdateFirmwareVersion:](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.
