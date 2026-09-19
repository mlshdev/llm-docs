> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inunsendmessagesintenthandling/confirm(intent:completion:)

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
optional func confirm(intent: INUnsendMessagesIntent, completion: @escaping @Sendable (INUnsendMessagesIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INUnsendMessagesIntent) async -> INUnsendMessagesIntentResponse
```

# confirmUnsendMessages:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) confirmUnsendMessages:(INUnsendMessagesIntent *) intent completion:(void (^)(INUnsendMessagesIntentResponse *response)) completion;
```
