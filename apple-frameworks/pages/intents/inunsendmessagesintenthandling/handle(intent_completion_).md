> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inunsendmessagesintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inunsendmessagesintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func handle(intent: INUnsendMessagesIntent, completion: @escaping @Sendable (INUnsendMessagesIntentResponse) -> Void)
```

```swift
func handle(intent: INUnsendMessagesIntent) async -> INUnsendMessagesIntentResponse
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

# handleUnsendMessages:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) handleUnsendMessages:(INUnsendMessagesIntent *) intent completion:(void (^)(INUnsendMessagesIntentResponse *response)) completion;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
