> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inanswercallintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inanswercallintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
optional func confirm(intent: INAnswerCallIntent, completion: @escaping @Sendable (INAnswerCallIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INAnswerCallIntent) async -> INAnswerCallIntentResponse
```

# confirmAnswerCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (void) confirmAnswerCall:(INAnswerCallIntent *) intent completion:(void (^)(INAnswerCallIntentResponse *response)) completion;
```
