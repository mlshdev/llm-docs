> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incallrecordresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a result that requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with callRecordToConfirm: INCallRecord?) -> Self
```

## Parameters

- `callRecordToConfirm`: The value that resolves the request. It must get confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallRecordResolutionResult](../incallrecordresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a call record, and it has to get confirmed by the user to proceed.

# confirmationRequiredWithCallRecordToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a result that requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCallRecordToConfirm:(INCallRecord *) callRecordToConfirm;
```

## Parameters

- `callRecordToConfirm`: The value that resolves the request. It must get confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallRecordResolutionResult](../incallrecordresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a call record, and it has to get confirmed by the user to proceed.
