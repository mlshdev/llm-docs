> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didchangeauthorization:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/locationmanager(_:didchangeauthorization:))

# locationManager(\_:didChangeAuthorization:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 14.0) · iPadOS 4.2+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · watchOS 1.0+ (deprecated in 7.0)

Tells the delegate its authorization status when the app creates the location manager and when the authorization status changes.

> Use [locationManagerDidChangeAuthorization(\_:)](locationmanagerdidchangeauthorization%28__%29.md) instead.

## Declaration

```swift
optional func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus)
```

## Parameters

- `manager`: The location manager object reporting the event.
- `status`: The authorization status for the app.

## See Also

### Responding to authorization changes

- [locationManagerDidChangeAuthorization(\_:)](locationmanagerdidchangeauthorization%28__%29.md): Tells the delegate when the app creates the location manager and when the authorization status changes.

# locationManager:didChangeAuthorizationStatus: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 14.0) · iPadOS 4.2+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.7+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · watchOS 1.0+ (deprecated in 7.0)

Tells the delegate its authorization status when the app creates the location manager and when the authorization status changes.

> Use [locationManagerDidChangeAuthorization:](locationmanagerdidchangeauthorization%28__%29.md) instead.

## Declaration

```objectivec
- (void) locationManager:(CLLocationManager *) manager didChangeAuthorizationStatus:(CLAuthorizationStatus) status;
```

## Parameters

- `manager`: The location manager object reporting the event.
- `status`: The authorization status for the app.

## See Also

### Responding to authorization changes

- [locationManagerDidChangeAuthorization:](locationmanagerdidchangeauthorization%28__%29.md): Tells the delegate when the app creates the location manager and when the authorization status changes.
