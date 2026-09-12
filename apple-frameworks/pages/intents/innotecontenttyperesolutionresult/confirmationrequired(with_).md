> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontenttyperesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/innotecontenttyperesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> This resolution result is no longer used

## Declaration

```swift
class func confirmationRequired(with noteContentTypeToConfirm: INNoteContentType) -> Self
```

## Parameters

- `noteContentTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNoteContentTypeResolutionResult](../innotecontenttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot provide note content for the specified type but can provide it for a different type and want to confirm with the user before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithNoteContentTypeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an object whose resolution requires confirmation from the user before proceeding.

> This resolution result is no longer used

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithNoteContentTypeToConfirm:(INNoteContentType) noteContentTypeToConfirm;
```

## Parameters

- `noteContentTypeToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INNoteContentTypeResolutionResult](../innotecontenttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot provide note content for the specified type but can provide it for a different type and want to confirm with the user before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedNoteContentType:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
