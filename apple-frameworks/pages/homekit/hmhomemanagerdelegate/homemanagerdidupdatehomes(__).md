> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerdelegate/homemanagerdidupdatehomes(_:)](https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanagerdidupdatehomes(_:))

# homeManagerDidUpdateHomes(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager updated its collection of homes.

## Declaration

```swift
optional func homeManagerDidUpdateHomes(_ manager: HMHomeManager)
```

## Parameters

- `manager`: The home manager with updated homes.

<a id="Discussion"></a>

## Discussion

The home manager calls this method to inform an application of significant changes to the home configuration, including when the manager finishes its first load of data from the HomeKit database on initialization. Use this method as a cue to invalidate any references to HomeKit objects and refresh your app’s views with the new list of homes.

## See Also

### Adding and removing homes

- [homeManager(\_:didAdd:)](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager(\_:didRemove:)](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome(\_:)](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.

# homeManagerDidUpdateHomes: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the home manager updated its collection of homes.

## Declaration

```objectivec
- (void) homeManagerDidUpdateHomes:(HMHomeManager *) manager;
```

## Parameters

- `manager`: The home manager with updated homes.

<a id="Discussion"></a>

## Discussion

The home manager calls this method to inform an application of significant changes to the home configuration, including when the manager finishes its first load of data from the HomeKit database on initialization. Use this method as a cue to invalidate any references to HomeKit objects and refresh your app’s views with the new list of homes.

## See Also

### Adding and removing homes

- [homeManager:didAddHome:](homemanager%28__didadd_%29.md): Tells the delegate that the home manager added a home.
- [homeManager:didRemoveHome:](homemanager%28__didremove_%29.md): Tells the delegate that the home manager removed a home.
- [homeManagerDidUpdatePrimaryHome:](homemanagerdidupdateprimaryhome%28__%29.md): Tells the delegate that the home manager updated its primary home.
