> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionmanager/requestauthorization(handler:)](https://developer.apple.com/documentation/coremotion/cmfalldetectionmanager/requestauthorization(handler:))

# requestAuthorization(handler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 7.2+

Requests authorization to receive notifications about fall detection events.

## Declaration

```swift
func requestAuthorization(handler: @escaping (CMAuthorizationStatus) -> Void)
```

## Parameters

- `handler`: A block that is called by the system after the user accepts or declines the authorization request.

  The system passes the following parameter:

  - **`status`**: The authorization status chosen by the user.

<a id="Discussion"></a>

## Discussion

As soon as the user authorizes fall detection, the system calls the delegate’s [fallDetectionManager(\_:didDetect:completionHandler:)](../cmfalldetectiondelegate/falldetectionmanager%28__diddetect_completionhandler_%29.md) method and passes the latest fall detection event.

## See Also

### Requesting Authorization

- [authorizationStatus](authorizationstatus.md): The authorization status for receiving fall detection event notifications.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.

# requestAuthorizationWithHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 7.2+

Requests authorization to receive notifications about fall detection events.

## Declaration

```objectivec
- (void) requestAuthorizationWithHandler:(void (^)(CMAuthorizationStatus status)) handler;
```

## Parameters

- `handler`: A block that is called by the system after the user accepts or declines the authorization request.

  The system passes the following parameter:

  - **`status`**: The authorization status chosen by the user.

<a id="Discussion"></a>

## Discussion

As soon as the user authorizes fall detection, the system calls the delegate’s [fallDetectionManager:didDetectEvent:completionHandler:](../cmfalldetectiondelegate/falldetectionmanager%28__diddetect_completionhandler_%29.md) method and passes the latest fall detection event.

## See Also

### Requesting Authorization

- [authorizationStatus](authorizationstatus.md): The authorization status for receiving fall detection event notifications.
- [CMAuthorizationStatus](../cmauthorizationstatus.md): The authorization status for motion-related features.
