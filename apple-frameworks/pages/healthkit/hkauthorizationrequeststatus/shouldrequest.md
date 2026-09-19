> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkauthorizationrequeststatus/shouldrequest

# HKAuthorizationRequestStatus.shouldRequest (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The application has not yet requested authorization for all the specified data types.

## Declaration

```swift
case shouldRequest
```

## See Also

### Statuses

- [HKAuthorizationRequestStatus.unknown](unknown.md): The authorization request status could not be determined because an error occurred.
- [HKAuthorizationRequestStatus.unnecessary](unnecessary.md): The application has already requested authorization for all the specified data types.

# HKAuthorizationRequestStatusShouldRequest (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The application has not yet requested authorization for all the specified data types.

## Declaration

```objectivec
HKAuthorizationRequestStatusShouldRequest
```

## See Also

### Statuses

- [HKAuthorizationRequestStatusUnknown](unknown.md): The authorization request status could not be determined because an error occurred.
- [HKAuthorizationRequestStatusUnnecessary](unnecessary.md): The application has already requested authorization for all the specified data types.
