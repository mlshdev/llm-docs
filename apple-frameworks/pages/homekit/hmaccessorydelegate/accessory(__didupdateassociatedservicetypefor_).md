> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorydelegate/accessory(_:didupdateassociatedservicetypefor:)](https://developer.apple.com/documentation/homekit/hmaccessorydelegate/accessory(_:didupdateassociatedservicetypefor:))

# accessory(\_:didUpdateAssociatedServiceTypeFor:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate when the associated service type of a service is modified.

## Declaration

```swift
optional func accessory(_ accessory: HMAccessory, didUpdateAssociatedServiceTypeFor service: HMService)
```

## Parameters

- `accessory`: The accessory.
- `service`: The service with a changed service type.

## See Also

### Observing accessories

- [accessoryDidUpdateName(\_:)](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability(\_:)](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices(\_:)](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory(\_:didUpdateNameFor:)](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory(\_:service:didUpdateValueFor:)](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory(\_:didAdd:)](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory(\_:didRemove:)](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory(\_:didUpdateFirmwareVersion:)](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

# accessory:didUpdateAssociatedServiceTypeForService: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate when the associated service type of a service is modified.

## Declaration

```objectivec
- (void) accessory:(HMAccessory *) accessory didUpdateAssociatedServiceTypeForService:(HMService *) service;
```

## Parameters

- `accessory`: The accessory.
- `service`: The service with a changed service type.

## See Also

### Observing accessories

- [accessoryDidUpdateName:](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability:](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices:](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory:didUpdateNameForService:](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory:service:didUpdateValueForCharacteristic:](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory:didAddProfile:](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory:didRemoveProfile:](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory:didUpdateFirmwareVersion:](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.
