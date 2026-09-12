> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintentresponse/code](https://developer.apple.com/documentation/intents/insendridefeedbackintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether your app successfully handled the intent.

## Declaration

```swift
var code: INSendRideFeedbackIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INSendRideFeedbackIntentResponseCode](../insendridefeedbackintentresponsecode.md): Constants indicating the state of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether your app successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INSendRideFeedbackIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSendRideFeedbackIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INSendRideFeedbackIntentResponseCode](../insendridefeedbackintentresponsecode.md): Constants indicating the state of the response.
