> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontentresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/innotecontentresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INNoteContentResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func disambiguation(with noteContentsToDisambiguate: [INNoteContent]) -> Self
```

## Parameters

- `noteContentsToDisambiguate`: An array of [INNoteContent](../innotecontent.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INNoteContentResolutionResult](../innotecontentresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one note matches the provided information and you cannot pick one definitively. Ask the user to select from among the notes that you specify.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

# disambiguationWithNoteContentsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INNoteContentResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) disambiguationWithNoteContentsToDisambiguate:(NSArray<INNoteContent *> *) noteContentsToDisambiguate;
```

## Parameters

- `noteContentsToDisambiguate`: An array of [INNoteContent](../innotecontent.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INNoteContentResolutionResult](../innotecontentresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one note matches the provided information and you cannot pick one definitively. Ask the user to select from among the notes that you specify.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedNoteContent:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithNoteContentToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
