> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanagerdidupdateprimaryhome(_:)

# homeManagerDidUpdatePrimaryHome(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager updated its primary home.

## Declaration

```swift
optional func homeManagerDidUpdatePrimaryHome(_ manager: HMHomeManager)
```

## Parameters

- `manager`: The home manager with an updated primary home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes(\_:)](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager(\_:didAdd:)](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager(\_:didRemove:)](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.

# homeManagerDidUpdatePrimaryHome: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager updated its primary home.

## Declaration

```objectivec
- (void) homeManagerDidUpdatePrimaryHome:(HMHomeManager *) manager;
```

## Parameters

- `manager`: The home manager with an updated primary home.

## See Also

### Adding and removing homes

- [homeManagerDidUpdateHomes:](homemanagerdidupdatehomes%28__%29.md): Tells the delegate that the home manager updated its collection of homes.
- [homeManager:didAddHome:](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager:didRemoveHome:](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
