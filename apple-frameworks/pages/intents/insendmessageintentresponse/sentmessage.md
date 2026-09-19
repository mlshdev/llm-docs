> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendmessageintentresponse/sentmessage

# sentMessage (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 16.0) · iPadOS 10.3+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 9.0)

The message sent by the intent.

## Declaration

```swift
@NSCopying var sentMessage: INMessage? { get set }
```

# sentMessage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 16.0) · iPadOS 10.3+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 9.0)

The message sent by the intent.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INMessage * sentMessage;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INMessage * sentMessage;
```
