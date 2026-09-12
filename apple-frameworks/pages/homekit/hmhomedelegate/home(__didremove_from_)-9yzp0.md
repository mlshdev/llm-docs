> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate/home(_:didremove:from:)-9yzp0](https://developer.apple.com/documentation/homekit/hmhomedelegate/home(_:didremove:from:)-9yzp0)

# home(\_:didRemove:from:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home removed a service from a service group.

## Declaration

```swift
optional func home(_ home: HMHome, didRemove service: HMService, from group: HMServiceGroup)
```

## Parameters

- `home`: The home.
- `service`: The service that was removed.
- `group`: The group from which the service was removed.

## See Also

### Observing Service Configuration

- [home(\_:didAdd:)](home%28__didadd_%29-3dymz.md): Tells the delegate that a home added a service group.
- [home(\_:didUpdateNameFor:)](home%28__didupdatenamefor_%29-4tam1.md): Tells the delegate that a home updated the name of a service group.
- [home(\_:didAdd:to:)](home%28__didadd_to_%29-6xdgy.md): Tells the delegate that a home added a service to a service group.
- [home(\_:didRemove:)](home%28__didremove_%29-6kqxo.md): Tells the delegate that a home removed a service group.

# home:didRemoveService:fromServiceGroup: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home removed a service from a service group.

## Declaration

```objectivec
- (void) home:(HMHome *) home didRemoveService:(HMService *) service fromServiceGroup:(HMServiceGroup *) group;
```

## Parameters

- `home`: The home.
- `service`: The service that was removed.
- `group`: The group from which the service was removed.

## See Also

### Observing Service Configuration

- [home:didAddServiceGroup:](home%28__didadd_%29-3dymz.md): Tells the delegate that a home added a service group.
- [home:didUpdateNameForServiceGroup:](home%28__didupdatenamefor_%29-4tam1.md): Tells the delegate that a home updated the name of a service group.
- [home:didAddService:toServiceGroup:](home%28__didadd_to_%29-6xdgy.md): Tells the delegate that a home added a service to a service group.
- [home:didRemoveServiceGroup:](home%28__didremove_%29-6kqxo.md): Tells the delegate that a home removed a service group.
