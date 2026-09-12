> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/incallrecordresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a result that requires the user to select from an array of choices.

## Declaration

```swift
class func disambiguation(with callRecordsToDisambiguate: [INCallRecord]) -> Self
```

## Parameters

- `callRecordsToDisambiguate`: An array of [INCallRecord](../incallrecord.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INCallRecordResolutionResult](../incallrecordresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result when one `INCallRecord` matches the given information, and you can’t definitively pick one. Ask the user to select from the objects you specify.

# disambiguationWithCallRecordsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a result that requires the user to select from an array of choices.

## Declaration

```objectivec
+ (instancetype) disambiguationWithCallRecordsToDisambiguate:(NSArray<INCallRecord *> *) callRecordsToDisambiguate;
```

## Parameters

- `callRecordsToDisambiguate`: An array of [INCallRecord](../incallrecord.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INCallRecordResolutionResult](../incallrecordresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result when one `INCallRecord` matches the given information, and you can’t definitively pick one. Ask the user to select from the objects you specify.
