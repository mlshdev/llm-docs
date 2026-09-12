> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintentresponse/code](https://developer.apple.com/documentation/intents/insetmessageattributeintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INSetMessageAttributeIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INSetMessageAttributeIntentResponseCode](../insetmessageattributeintentresponsecode.md): Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INSetMessageAttributeIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INSetMessageAttributeIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INSetMessageAttributeIntentResponseCode](../insetmessageattributeintentresponsecode.md): Constants that indicate the response state.
