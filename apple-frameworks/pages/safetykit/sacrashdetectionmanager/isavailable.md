> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionmanager/isavailable](https://developer.apple.com/documentation/safetykit/sacrashdetectionmanager/isavailable)

# isAvailable (Swift)

**Framework:** SafetyKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

A Boolean value that indicates if Crash Detection is available.

## Declaration

```swift
class var isAvailable: Bool { get }
```

## See Also

### Determining availability

- [authorizationStatus](authorizationstatus.md): A value that indicates if the person authorized the app to receive Crash Detection events.

# available (Objective-C)

**Framework:** SafetyKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

A Boolean value that indicates if Crash Detection is available.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isAvailable) BOOL available;
```

## See Also

### Determining availability

- [authorizationStatus](authorizationstatus.md): A value that indicates if the person authorized the app to receive Crash Detection events.
