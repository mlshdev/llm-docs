> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerdelegate/homemanager(_:didupdate:)](https://developer.apple.com/documentation/homekit/hmhomemanagerdelegate/homemanager(_:didupdate:))

# homeManager(\_:didUpdate:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when the authorization status changes.

## Declaration

```swift
optional func homeManager(_ manager: HMHomeManager, didUpdate status: HMHomeManagerAuthorizationStatus)
```

## Parameters

- `manager`: The home manager for which the status changed.
- `status`: The new authorization status. You can also read this value at any time from the manager’s [authorizationStatus](../hmhomemanager/authorizationstatus.md) property.

# homeManager:didUpdateAuthorizationStatus: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate when the authorization status changes.

## Declaration

```objectivec
- (void) homeManager:(HMHomeManager *) manager didUpdateAuthorizationStatus:(HMHomeManagerAuthorizationStatus) status;
```

## Parameters

- `manager`: The home manager for which the status changed.
- `status`: The new authorization status. You can also read this value at any time from the manager’s [authorizationStatus](../hmhomemanager/authorizationstatus.md) property.
