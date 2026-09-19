> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanager(_:didremove:)

# homeManager(\_:didRemove:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager removed a home.

## Declaration

```swift
optional func homeManager(_ manager: HMHomeManager, didRemove home: HMHome)
```

## Parameters

- `manager`: The home manager that removed the home.
- `home`: The removed home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes(\_:)](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager(\_:didAdd:)](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManagerDidUpdatePrimaryHome(\_:)](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.

# homeManager:didRemoveHome: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager removed a home.

## Declaration

```objectivec
- (void) homeManager:(HMHomeManager *) manager didRemoveHome:(HMHome *) home;
```

## Parameters

- `manager`: The home manager that removed the home.
- `home`: The removed home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes:](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager:didAddHome:](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManagerDidUpdatePrimaryHome:](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.
