> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/isactivityavailable

# isActivityAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

A Boolean value that indicates whether the current device supports headphone activity.

## Declaration

```swift
var isActivityAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the device supports headphone activity, start status updates and then wait for an update that indicates supported headphones are connected.

## See Also

### Checking Availability

- [isActivityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [isStatusAvailable](isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [isStatusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus()](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.

# activityAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

A Boolean value that indicates whether the current device supports headphone activity.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isActivityAvailable) BOOL activityAvailable;
```

<a id="discussion"></a>

## Discussion

If the device supports headphone activity, start status updates and then wait for an update that indicates supported headphones are connected.

## See Also

### Checking Availability

- [activityActive](isactivityactive.md): A Boolean value that indicates whether headphone motion activity is active.
- [statusAvailable](isstatusavailable.md): A Boolean value that indicates whether the current device supports headphone status.
- [statusActive](isstatusactive.md): A Boolean value that indicates whether headphone status is active.
- [authorizationStatus](authorizationstatus%28%29.md): Returns the authorization status for monitoring headphone activity.
