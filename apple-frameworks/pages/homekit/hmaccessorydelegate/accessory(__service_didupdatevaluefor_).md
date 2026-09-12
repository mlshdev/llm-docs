> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorydelegate/accessory(_:service:didupdatevaluefor:)](https://developer.apple.com/documentation/homekit/hmaccessorydelegate/accessory(_:service:didupdatevaluefor:))

# accessory(\_:service:didUpdateValueFor:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate of a change in value of a characteristic.

## Declaration

```swift
optional func accessory(_ accessory: HMAccessory, service: HMService, didUpdateValueFor characteristic: HMCharacteristic)
```

## Parameters

- `accessory`: The accessory.
- `service`: The service with a changed characteristic value.
- `characteristic`: The characteristic whose value changed.

## Mentioned In

- [Testing your app with the HomeKit Accessory Simulator](../testing-your-app-with-the-homekit-accessory-simulator.md)

<a id="Discussion"></a>

## Discussion

This method is called as a result of a change in value initiated by the accessory. Programmatic changes initiated by the app do not result in this method being called.

## See Also

### Observing accessories

- [accessoryDidUpdateName(\_:)](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability(\_:)](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices(\_:)](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory(\_:didUpdateNameFor:)](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory(\_:didUpdateAssociatedServiceTypeFor:)](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory(\_:didAdd:)](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory(\_:didRemove:)](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory(\_:didUpdateFirmwareVersion:)](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.

# accessory:service:didUpdateValueForCharacteristic: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate of a change in value of a characteristic.

## Declaration

```objectivec
- (void) accessory:(HMAccessory *) accessory service:(HMService *) service didUpdateValueForCharacteristic:(HMCharacteristic *) characteristic;
```

## Parameters

- `accessory`: The accessory.
- `service`: The service with a changed characteristic value.
- `characteristic`: The characteristic whose value changed.

## Mentioned In

- [Testing your app with the HomeKit Accessory Simulator](../testing-your-app-with-the-homekit-accessory-simulator.md)

<a id="Discussion"></a>

## Discussion

This method is called as a result of a change in value initiated by the accessory. Programmatic changes initiated by the app do not result in this method being called.

## See Also

### Observing accessories

- [accessoryDidUpdateName:](accessorydidupdatename%28__%29.md): Informs the delegate when the name of the accessory is updated.
- [accessoryDidUpdateReachability:](accessorydidupdatereachability%28__%29.md): Informs the delegate when the reachability of the accessory changes.
- [accessoryDidUpdateServices:](accessorydidupdateservices%28__%29.md): Informs the delegate when the services on the accessory have been updated.
- [accessory:didUpdateNameForService:](accessory%28__didupdatenamefor_%29.md): Informs the delegate when the name of a service is updated.
- [accessory:didUpdateAssociatedServiceTypeForService:](accessory%28__didupdateassociatedservicetypefor_%29.md): Informs the delegate when the associated service type of a service is modified.
- [accessory:didAddProfile:](accessory%28__didadd_%29.md): Informs the delegate when a profile is added to an accessory.
- [accessory:didRemoveProfile:](accessory%28__didremove_%29.md): Informs the delegate when a profile is removed from an accessory.
- [accessory:didUpdateFirmwareVersion:](accessory%28__didupdatefirmwareversion_%29.md): Informs the delegate when firmwareVersion has been changed for an accessory.
