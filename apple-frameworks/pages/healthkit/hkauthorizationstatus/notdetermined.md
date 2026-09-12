> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkauthorizationstatus/notdetermined](https://developer.apple.com/documentation/healthkit/hkauthorizationstatus/notdetermined)

# HKAuthorizationStatus.notDetermined (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The user has not yet chosen to authorize access to the specified data type.

## Declaration

```swift
case notDetermined
```

<a id="Discussion"></a>

## Discussion

Make sure your app requests proper authorization before calling any other HealthKit methods. For more information on setting up HealthKit, see `HealthKit`.

## See Also

### Constants

- [HKAuthorizationStatus.sharingDenied](sharingdenied.md): The user has explicitly denied your app permission to save data of the specified type.
- [HKAuthorizationStatus.sharingAuthorized](sharingauthorized.md): The user has explicitly authorized your app to save data of the specified type.

# HKAuthorizationStatusNotDetermined (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The user has not yet chosen to authorize access to the specified data type.

## Declaration

```objectivec
HKAuthorizationStatusNotDetermined
```

<a id="Discussion"></a>

## Discussion

Make sure your app requests proper authorization before calling any other HealthKit methods. For more information on setting up HealthKit, see `HealthKit`.

## See Also

### Constants

- [HKAuthorizationStatusSharingDenied](sharingdenied.md): The user has explicitly denied your app permission to save data of the specified type.
- [HKAuthorizationStatusSharingAuthorized](sharingauthorized.md): The user has explicitly authorized your app to save data of the specified type.
