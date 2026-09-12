> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infocusstatuscenter/requestauthorization(completionhandler:)](https://developer.apple.com/documentation/intents/infocusstatuscenter/requestauthorization(completionhandler:))

# requestAuthorization(completionHandler:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Asks the system for access to the user’s focus status.

## Declaration

```swift
func requestAuthorization(completionHandler: (@Sendable (INFocusStatusAuthorizationStatus) -> Void)? = nil)
```

```swift
func requestAuthorization() async -> INFocusStatusAuthorizationStatus
```

## Parameters

- `completionHandler`: The handler block to execute when the authorization status for your app is determined. This block has no return value and takes the following parameter:

  - **status**: The authorization status of your app. For a list of possible values, see [INFocusStatusAuthorizationStatus](../infocusstatusauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

Call this method from your app to request authorization to access the user’s focus status. The first time you make this request, the system prompts the user to grant or deny permission.

## See Also

### Requesting Authorization

- [authorizationStatus](authorizationstatus.md): Returns your app’s current ability to access the user’s focus status.

# requestAuthorizationWithCompletionHandler: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Asks the system for access to the user’s focus status.

## Declaration

```objectivec
- (void) requestAuthorizationWithCompletionHandler:(void (^)(INFocusStatusAuthorizationStatus status)) completionHandler;
```

## Parameters

- `completionHandler`: The handler block to execute when the authorization status for your app is determined. This block has no return value and takes the following parameter:

  - **status**: The authorization status of your app. For a list of possible values, see [INFocusStatusAuthorizationStatus](../infocusstatusauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

Call this method from your app to request authorization to access the user’s focus status. The first time you make this request, the system prompts the user to grant or deny permission.

## See Also

### Requesting Authorization

- [authorizationStatus](authorizationstatus.md): Returns your app’s current ability to access the user’s focus status.
