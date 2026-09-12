> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallrecordtocallbackresolutionresult/init(callrecordresolutionresult:)](https://developer.apple.com/documentation/intents/instartcallcallrecordtocallbackresolutionresult/init(callrecordresolutionresult:))

# init(callRecordResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object whose resolution involves successfully redialing a call.

## Declaration

```swift
init(callRecordResolutionResult: INCallRecordResolutionResult)
```

## Parameters

- `callRecordResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different from the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INStartCallCallRecordToCallBackResolutionResult](../instartcallcallrecordtocallbackresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to redial a call.

# initWithCallRecordResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object whose resolution involves successfully redialing a call.

## Declaration

```objectivec
- (instancetype) initWithCallRecordResolutionResult:(INCallRecordResolutionResult *) callRecordResolutionResult;
```

## Parameters

- `callRecordResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different from the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INStartCallCallRecordToCallBackResolutionResult](../instartcallcallrecordtocallbackresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to redial a call.
