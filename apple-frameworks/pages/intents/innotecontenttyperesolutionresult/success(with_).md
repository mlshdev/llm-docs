> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontenttyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/innotecontenttyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This resolution result is no longer used

## Declaration

```swift
class func success(with resolvedNoteContentType: INNoteContentType) -> Self
```

## Parameters

- `resolvedNoteContentType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteContentTypeResolutionResult](../innotecontenttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you support the specified type of content.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

# successWithResolvedNoteContentType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This resolution result is no longer used

## Declaration

```objectivec
+ (instancetype) successWithResolvedNoteContentType:(INNoteContentType) resolvedNoteContentType;
```

## Parameters

- `resolvedNoteContentType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INNoteContentTypeResolutionResult](../innotecontenttyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you support the specified type of content.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithNoteContentTypeToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
