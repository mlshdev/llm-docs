> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontentresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/innotecontentresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INNoteContentResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedNoteContent: INNoteContent) -> Self
```

## Parameters

- `resolvedNoteContent`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteContentResolutionResult](../innotecontentresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to identify the specific note content to create or modify.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedNoteContent: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INNoteContentResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedNoteContent:(INNoteContent *) resolvedNoteContent;
```

## Parameters

- `resolvedNoteContent`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteContentResolutionResult](../innotecontentresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to identify the specific note content to create or modify.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithNoteContentToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguationWithNoteContentsToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
