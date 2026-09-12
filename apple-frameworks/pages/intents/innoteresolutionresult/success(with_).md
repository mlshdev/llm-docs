> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innoteresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/innoteresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func success(with resolvedNote: INNote) -> Self
```

## Parameters

- `resolvedNote`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object after successfully locating the note to modify. Provide an [INNote](../innote.md) object with as much information about the note as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedNote: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) successWithResolvedNote:(INNote *) resolvedNote;
```

## Parameters

- `resolvedNote`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object after successfully locating the note to modify. Provide an [INNote](../innote.md) object with as much information about the note as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithNoteToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguationWithNotesToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
