> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotebookitemtyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/innotebookitemtyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INNotebookItemTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class func confirmationRequired(with notebookItemTypeToConfirm: INNotebookItemType) -> Self
```

## Parameters

- `notebookItemTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNotebookItemTypeResolutionResult](../innotebookitemtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot search for the specified type of content but can search for a similar type and want to confirm with the user before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithNotebookItemTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> INNotebookItemTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithNotebookItemTypeToConfirm:(INNotebookItemType) notebookItemTypeToConfirm;
```

## Parameters

- `notebookItemTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNotebookItemTypeResolutionResult](../innotebookitemtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot search for the specified type of content but can search for a similar type and want to confirm with the user before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedNotebookItemType:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithNotebookItemTypesToDisambiguate:](https://developer.apple.com/documentation/intents/innotebookitemtyperesolutionresult/disambiguationwithnotebookitemtypestodisambiguate:): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
