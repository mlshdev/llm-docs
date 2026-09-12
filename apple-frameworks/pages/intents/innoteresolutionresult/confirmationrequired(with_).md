> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innoteresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/innoteresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with noteToConfirm: INNote?) -> Self
```

## Parameters

- `noteToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you locate a single note but cannot determine with enough certainty that it is the one intended by the user. For example, you might ask for confirmation when the note text does not match precisely. Provide an [INNote](../innote.md) object with as much information about the note as you have available.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithNoteToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INNoteResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithNoteToConfirm:(INNote *) noteToConfirm;
```

## Parameters

- `noteToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNoteResolutionResult](../innoteresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you locate a single note but cannot determine with enough certainty that it is the one intended by the user. For example, you might ask for confirmation when the note text does not match precisely. Provide an [INNote](../innote.md) object with as much information about the note as you have available.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedNote:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithNotesToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
