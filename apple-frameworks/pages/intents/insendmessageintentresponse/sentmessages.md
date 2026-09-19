> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendmessageintentresponse/sentmessages

# sentMessages (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
var sentMessages: [INMessage]? { get set }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

# sentMessages (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INMessage *> * sentMessages;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INMessage *> * sentMessages;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
