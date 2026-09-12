> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inhangupcallintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inhangupcallintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
func handle(intent: INHangUpCallIntent, completion: @escaping @Sendable (INHangUpCallIntentResponse) -> Void)
```

```swift
func handle(intent: INHangUpCallIntent) async -> INHangUpCallIntentResponse
```

# handleHangUpCall:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (void) handleHangUpCall:(INHangUpCallIntent *) intent completion:(void (^)(INHangUpCallIntentResponse *response)) completion;
```
