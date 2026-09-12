> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innoteresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/innoteresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func disambiguation(with notesToDisambiguate: [INNote]) -> Self
```

## Parameters

- `notesToDisambiguate`: An array of [INNote](../innote.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one note matches the given information and you can’t pick one definitively. Ask the user to select from among the notes that you specify.

For each [INNote](../innote.md) object that you provide, include enough information to be able to locate the note again later. When the user selects one of the notes, SiriKit puts the details from your [INNote](../innote.md) object into the intent and asks you to resolve the note again. Therefore, you might assign a unique value to the [identifier](../innote/identifier.md) property of the note so that you can perform a fast lookup of the selected note during the second resolution pass.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

# disambiguationWithNotesToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to select from among the specified objects.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) disambiguationWithNotesToDisambiguate:(NSArray<INNote *> *) notesToDisambiguate;
```

## Parameters

- `notesToDisambiguate`: An array of [INNote](../innote.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one note matches the given information and you can’t pick one definitively. Ask the user to select from among the notes that you specify.

For each [INNote](../innote.md) object that you provide, include enough information to be able to locate the note again later. When the user selects one of the notes, SiriKit puts the details from your [INNote](../innote.md) object into the intent and asks you to resolve the note again. Therefore, you might assign a unique value to the [identifier](../innote/identifier.md) property of the note so that you can perform a fast lookup of the selected note during the second resolution pass.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedNote:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithNoteToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
