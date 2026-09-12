> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inhangupcallintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inhangupcallintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
optional func confirm(intent: INHangUpCallIntent, completion: @escaping @Sendable (INHangUpCallIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INHangUpCallIntent) async -> INHangUpCallIntentResponse
```

# confirmHangUpCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (void) confirmHangUpCall:(INHangUpCallIntent *) intent completion:(void (^)(INHangUpCallIntentResponse *response)) completion;
```
