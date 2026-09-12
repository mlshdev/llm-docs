> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintentresponsecode](https://developer.apple.com/documentation/intents/insearchforphotosintentresponsecode)

# INSearchForPhotosIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INSearchForPhotosIntentResponseCode
```

## Topics

### Constants

- [INSearchForPhotosIntentResponseCode.unspecified](insearchforphotosintentresponsecode/unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCode.ready](insearchforphotosintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCode.continueInApp](insearchforphotosintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCode.failure](insearchforphotosintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCode.failureRequiringAppLaunch](insearchforphotosintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCode.failureAppConfigurationRequired](insearchforphotosintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.

### Initializers

- [init(rawValue:)](insearchforphotosintentresponsecode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](insearchforphotosintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INSearchForPhotosIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Constants indicating the status of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INSearchForPhotosIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSearchForPhotosIntentResponseCodeUnspecified](insearchforphotosintentresponsecode/unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCodeReady](insearchforphotosintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCodeContinueInApp](insearchforphotosintentresponsecode/continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCodeFailure](insearchforphotosintentresponsecode/failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCodeFailureRequiringAppLaunch](insearchforphotosintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCodeFailureAppConfigurationRequired](insearchforphotosintentresponsecode/failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.

## See Also

### Getting the Response Code

- [code](insearchforphotosintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
