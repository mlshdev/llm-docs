> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomedelegate/homedidupdatename(_:)](https://developer.apple.com/documentation/homekit/hmhomedelegate/homedidupdatename(_:))

# homeDidUpdateName(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home’s name changed.

## Declaration

```swift
optional func homeDidUpdateName(_ home: HMHome)
```

## Parameters

- `home`: The home whose name has changed.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Observing Home Configuration

- [home(\_:didAdd:)](home%28__didadd_%29-6jcl7.md): Tells the delegate that a home added a new accessory.
- [home(\_:didUpdate:for:)](home%28__didupdate_for_%29.md): Tells the delegate that a home assigned an accessory to a different room.
- [home(\_:didRemove:)](home%28__didremove_%29-6plye.md): Tells the delegate that a home removed an accessory.
- [home(\_:didAdd:)](home%28__didadd_%29-42aqd.md): Tells the delegate that a home added a new room.
- [home(\_:didUpdateNameFor:)](home%28__didupdatenamefor_%29-1a110.md): Tells the delegate that a home updated the name of one of its rooms.
- [home(\_:didAdd:to:)](home%28__didadd_to_%29-4hiew.md): Tells the delegate that a home added a room to a zone.
- [home(\_:didRemove:from:)](home%28__didremove_from_%29-8oz67.md): Tells the delegate that a home removed a room from a zone.
- [home(\_:didRemove:)](home%28__didremove_%29-3if6s.md): Tells the delegate that a home removed a room.
- [home(\_:didAdd:)](home%28__didadd_%29-7vyoe.md): Tells the delegate that a home added a new zone.
- [home(\_:didUpdateNameFor:)](home%28__didupdatenamefor_%29-1k32g.md): Tells the delegate that a home changed the name of a zone.
- [home(\_:didRemove:)](home%28__didremove_%29-3o8ta.md): Tells the delegate that a home removed a zone.
- [home(\_:didAdd:)](home%28__didadd_%29-8q7jm.md): Tells the delegate that a home added a user.
- [home(\_:didRemove:)](home%28__didremove_%29-3fm38.md): Tells the delegate that a home removed a user.
- [homeDidUpdateAccessControl(forCurrentUser:)](homedidupdateaccesscontrol%28forcurrentuser_%29.md): Tells the delegate that the access control for the current user has changed.
- [home(\_:didUpdate:)](home%28__didupdate_%29-5fntk.md): Tells the delegate that the state of the home hub has changed.

# homeDidUpdateName: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a home’s name changed.

## Declaration

```objectivec
- (void) homeDidUpdateName:(HMHome *) home;
```

## Parameters

- `home`: The home whose name has changed.

## See Also

### Related Documentation

- [HomeKit Developer Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/HomeKitDeveloperGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40015050)

### Observing Home Configuration

- [home:didAddAccessory:](home%28__didadd_%29-6jcl7.md): Tells the delegate that a home added a new accessory.
- [home:didUpdateRoom:forAccessory:](home%28__didupdate_for_%29.md): Tells the delegate that a home assigned an accessory to a different room.
- [home:didRemoveAccessory:](home%28__didremove_%29-6plye.md): Tells the delegate that a home removed an accessory.
- [home:didAddRoom:](home%28__didadd_%29-42aqd.md): Tells the delegate that a home added a new room.
- [home:didUpdateNameForRoom:](home%28__didupdatenamefor_%29-1a110.md): Tells the delegate that a home updated the name of one of its rooms.
- [home:didAddRoom:toZone:](home%28__didadd_to_%29-4hiew.md): Tells the delegate that a home added a room to a zone.
- [home:didRemoveRoom:fromZone:](home%28__didremove_from_%29-8oz67.md): Tells the delegate that a home removed a room from a zone.
- [home:didRemoveRoom:](home%28__didremove_%29-3if6s.md): Tells the delegate that a home removed a room.
- [home:didAddZone:](home%28__didadd_%29-7vyoe.md): Tells the delegate that a home added a new zone.
- [home:didUpdateNameForZone:](home%28__didupdatenamefor_%29-1k32g.md): Tells the delegate that a home changed the name of a zone.
- [home:didRemoveZone:](home%28__didremove_%29-3o8ta.md): Tells the delegate that a home removed a zone.
- [home:didAddUser:](home%28__didadd_%29-8q7jm.md): Tells the delegate that a home added a user.
- [home:didRemoveUser:](home%28__didremove_%29-3fm38.md): Tells the delegate that a home removed a user.
- [homeDidUpdateAccessControlForCurrentUser:](homedidupdateaccesscontrol%28forcurrentuser_%29.md): Tells the delegate that the access control for the current user has changed.
- [home:didUpdateHomeHubState:](home%28__didupdate_%29-5fntk.md): Tells the delegate that the state of the home hub has changed.
