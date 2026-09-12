> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerdelegate/homemanager(_:didadd:)](https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanager(_:didadd:))

# homeManager(\_:didAdd:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager added a home.

## Declaration

```swift
optional func homeManager(_ manager: HMHomeManager, didAdd home: HMHome)
```

## Parameters

- `manager`: The home manager that added the home.
- `home`: The newly added home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes(\_:)](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager(\_:didRemove:)](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome(\_:)](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.

# homeManager:didAddHome: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager added a home.

## Declaration

```objectivec
- (void) homeManager:(HMHomeManager *) manager didAddHome:(HMHome *) home;
```

## Parameters

- `manager`: The home manager that added the home.
- `home`: The newly added home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes:](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager:didRemoveHome:](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome:](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.
