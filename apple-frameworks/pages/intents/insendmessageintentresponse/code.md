> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendmessageintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INSendMessageIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INSendMessageIntentResponseCode](../insendmessageintentresponsecode.md): Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INSendMessageIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSendMessageIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INSendMessageIntentResponseCode](../insendmessageintentresponsecode.md): Constants that indicate the response state.
