> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintentresponse/code](https://developer.apple.com/documentation/intents/instartcallintentresponse/code)

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

The code indicating whether you successfully handled the intent.

## Declaration

```swift
var code: INStartCallIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INStartCallIntentResponseCode](../instartcallintentresponsecode.md): Constants that indicate the response state.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

The code indicating whether you successfully handled the intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INStartCallIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INStartCallIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

This property’s value is set automatically at initialization and can’t be changed later.

## See Also

### Getting the Response Code

- [INStartCallIntentResponseCode](../instartcallintentresponsecode.md): Constants that indicate the response state.
