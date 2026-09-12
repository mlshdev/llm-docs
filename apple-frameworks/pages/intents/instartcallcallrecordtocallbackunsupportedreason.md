> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallrecordtocallbackunsupportedreason](https://developer.apple.com/documentation/intents/instartcallcallrecordtocallbackunsupportedreason)

# INStartCallCallRecordToCallBackUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A reason why your app can’t use a record to call a person back.

## Declaration

```swift
enum INStartCallCallRecordToCallBackUnsupportedReason
```

## Topics

### Reasons

- [INStartCallCallRecordToCallBackUnsupportedReason.noMatchingCall](instartcallcallrecordtocallbackunsupportedreason/nomatchingcall.md): A reason indicating that no call record matches the intent’s parameter.

### Initializers

- [init(rawValue:)](instartcallcallrecordtocallbackunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.

# INStartCallCallRecordToCallBackUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A reason why your app can’t use a record to call a person back.

## Declaration

```objectivec
enum INStartCallCallRecordToCallBackUnsupportedReason : NSInteger;
```

## Topics

### Reasons

- [INStartCallCallRecordToCallBackUnsupportedReasonNoMatchingCall](instartcallcallrecordtocallbackunsupportedreason/nomatchingcall.md): A reason indicating that no call record matches the intent’s parameter.

## See Also

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallIntentResponse](instartcallintentresponse.md): Your app’s response to a start call intent.
