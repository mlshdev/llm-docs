> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontenttyperesolutionresult](https://developer.apple.com/documentation/intents/innotecontenttyperesolutionresult)

# INNoteContentTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

A resolution result for the type of data contained in notes.

> This resolution result is no longer used

## Declaration

```swift
class INNoteContentTypeResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INNoteContentTypeResolutionResult](innotecontenttyperesolutionresult.md) object when resolving parameters containing an [INNoteContentType](innotecontenttype.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](innotecontenttyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](innotecontenttyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Note Content

- [INNoteContentType](innotecontenttype.md): Deprecated. Constants indicating the type of content represented by the note.

# INNoteContentTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

A resolution result for the type of data contained in notes.

> This resolution result is no longer used

## Declaration

```objectivec
@interface INNoteContentTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INNoteContentTypeResolutionResult](innotecontenttyperesolutionresult.md) object when resolving parameters containing an [INNoteContentType](innotecontenttype.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedNoteContentType:](innotecontenttyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithNoteContentTypeToConfirm:](innotecontenttyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Note Content

- [INNoteContentType](innotecontenttype.md): Deprecated. Constants indicating the type of content represented by the note.
