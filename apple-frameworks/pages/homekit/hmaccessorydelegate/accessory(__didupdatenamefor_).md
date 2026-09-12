> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorydelegate/accessory(_:didupdatenamefor:)](https://developer.apple.com/documentation/homekit/hmaccessorydelegate/accessory(_:didupdatenamefor:))

# accessory(\_:didUpdateNameFor:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate when the name of a service is updated.

## Declaration

```swift
optional func accessory(_ accessory: HMAccessory, didUpdateNameFor service: HMService)
```

## Parameters

- `accessory`: The accessory with an updated service name.
- `service`: The service whose name changed.

## See Also

### Observing accessories

- [accessoryDidUpdateName(\_:)](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability(\_:)](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices(\_:)](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory(\_:service:didUpdateValueFor:)](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory(\_:didUpdateAssociatedServiceTypeFor:)](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory(\_:didAdd:)](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory(\_:didRemove:)](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory(\_:didUpdateFirmwareVersion:)](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

# accessory:didUpdateNameForService: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate when the name of a service is updated.

## Declaration

```objectivec
- (void) accessory:(HMAccessory *) accessory didUpdateNameForService:(HMService *) service;
```

## Parameters

- `accessory`: The accessory with an updated service name.
- `service`: The service whose name changed.

## See Also

### Observing accessories

- [accessoryDidUpdateName:](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability:](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices:](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory:service:didUpdateValueForCharacteristic:](accessory%28__service_didupdatevaluefor_%29.md): Informs the delegate of a change in value of a characteristic.
- [accessory:didUpdateAssociatedServiceTypeForService:](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory:didAddProfile:](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory:didRemoveProfile:](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory:didUpdateFirmwareVersion:](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.
