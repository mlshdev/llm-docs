> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ineditmessageintenthandling/confirm(intent:completion:)

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
optional func confirm(intent: INEditMessageIntent, completion: @escaping @Sendable (INEditMessageIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INEditMessageIntent) async -> INEditMessageIntentResponse
```

# confirmEditMessage:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) confirmEditMessage:(INEditMessageIntent *) intent completion:(void (^)(INEditMessageIntentResponse *response)) completion;
```
