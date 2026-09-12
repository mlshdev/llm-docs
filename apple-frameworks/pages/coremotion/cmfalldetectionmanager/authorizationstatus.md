> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionmanager/authorizationstatus](https://developer.apple.com/documentation/coremotion/cmfalldetectionmanager/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The authorization status for receiving fall detection event notifications.

## Declaration

```swift
var authorizationStatus: CMAuthorizationStatus { get }
```

## See Also

### Requesting Authorization

- [requestAuthorization(handler:)](requestauthorization%28handler_%29.md): Requests authorization to receive notifications about fall detection events.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** watchOS 7.2+

The authorization status for receiving fall detection event notifications.

## Declaration

```objectivec
@property (nonatomic, readonly) CMAuthorizationStatus authorizationStatus;
```

## See Also

### Requesting Authorization

- [requestAuthorizationWithHandler:](requestauthorization%28handler_%29.md): Requests authorization to receive notifications about fall detection events.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
