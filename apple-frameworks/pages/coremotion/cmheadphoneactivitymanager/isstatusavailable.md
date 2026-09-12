> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager/isstatusavailable](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/isstatusavailable)

# isStatusAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

A Boolean value that indicates whether the current device supports headphone status.

## Declaration

```swift
var isStatusAvailable: Bool { get }
```

## See Also

### Checking Availability

- [isActivityAvailable](isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [isActivityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [isStatusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.

# statusAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

A Boolean value that indicates whether the current device supports headphone status.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStatusAvailable) BOOL statusAvailable;
```

## See Also

### Checking Availability

- [activityAvailable](isactivityavailable.md): A Boolean value that indicates whether the current device supports headphone activity.
- [activityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [statusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.
