> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionmanager/authorizationstatus](https://developer.apple.com/documentation/safetykit/sacrashdetectionmanager/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

A value that indicates if the person authorized the app to receive Crash Detection events.

## Declaration

```swift
var authorizationStatus: SAAuthorizationStatus { get }
```

## See Also

### Determining availability

- [isAvailable](isavailable.md): A Boolean value that indicates if Crash Detection is available.

# authorizationStatus (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

A value that indicates if the person authorized the app to receive Crash Detection events.

## Declaration

```objectivec
@property (nonatomic, readonly) SAAuthorizationStatus authorizationStatus;
```

## See Also

### Determining availability

- [available](isavailable.md): A Boolean value that indicates if Crash Detection is available.
