> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inanswercallintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inanswercallintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
func handle(intent: INAnswerCallIntent, completion: @escaping @Sendable (INAnswerCallIntentResponse) -> Void)
```

```swift
func handle(intent: INAnswerCallIntent) async -> INAnswerCallIntentResponse
```

# handleAnswerCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (void) handleAnswerCall:(INAnswerCallIntent *) intent completion:(void (^)(INAnswerCallIntentResponse *response)) completion;
```
