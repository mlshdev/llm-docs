> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/authorizationstatus()

# authorizationStatus() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Returns the authorization status for monitoring headphone activity.

## Declaration

```swift
class func authorizationStatus() -> CMAuthorizationStatus
```

## See Also

### Checking Availability

- [isActivityAvailable](isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [isActivityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [isStatusAvailable](isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [isStatusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Returns the authorization status for monitoring headphone activity.

## Declaration

```objectivec
+ (CMAuthorizationStatus) authorizationStatus;
```

## See Also

### Checking Availability

- [activityAvailable](isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [activityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [statusAvailable](isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [statusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.
