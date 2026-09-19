> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/infocusstatuscenter/authorizationstatus

# authorizationStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Returns your app’s current ability to access the user’s focus status.

## Declaration

```swift
var authorizationStatus: INFocusStatusAuthorizationStatus { get }
```

## See Also

### Requesting Authorization

- [requestAuthorization(completionHandler:)](requestauthorization%28completionhandler_%29.md): Asks the system for access to the user’s focus status.

# authorizationStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Returns your app’s current ability to access the user’s focus status.

## Declaration

```objectivec
@property (nonatomic, readonly) INFocusStatusAuthorizationStatus authorizationStatus;
```

## See Also

### Requesting Authorization

- [requestAuthorizationWithCompletionHandler:](requestauthorization%28completionhandler_%29.md): Asks the system for access to the user’s focus status.
