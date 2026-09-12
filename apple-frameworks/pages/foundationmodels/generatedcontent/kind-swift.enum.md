> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/kind-swift.enum](https://developer.apple.com/documentation/foundationmodels/generatedcontent/kind-swift.enum)

# GeneratedContent.Kind

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A representation of the different types of content that can be stored in generated content.

## Declaration

```swift
enum Kind
```

<a id="overview"></a>

## Overview

`Kind` represents the various types of JSON-compatible data that can be held within a [GeneratedContent](../generatedcontent.md) instance, including primitive types, arrays, and structured objects.

## Topics

### Getting the kind of content

- [GeneratedContent.Kind.array(\_:)](kind-swift.enum/array%28__%29.md): An array of generated content elements.
- [GeneratedContent.Kind.bool(\_:)](kind-swift.enum/bool%28__%29.md): A boolean value.
- [GeneratedContent.Kind.null](kind-swift.enum/null.md): A null value.
- [GeneratedContent.Kind.number(\_:)](kind-swift.enum/number%28__%29.md): A numeric value.
- [GeneratedContent.Kind.string(\_:)](kind-swift.enum/string%28__%29.md): A string value.
- [GeneratedContent.Kind.structure(properties:orderedKeys:)](kind-swift.enum/structure%28properties_orderedkeys_%29.md): A structured object with key-value pairs.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the content

- [kind](kind-swift.property.md): The representation of the generated content.
- [value(\_:)](value%28__%29.md): Reads a top level, concrete partially generable type from a named property.
- [value(\_:forProperty:)](value%28__forproperty_%29.md): Reads a concrete generable type from a named property.
- [isComplete](iscomplete.md): A Boolean value that indicates whether the generated content is complete.
- [generatedContent](generatedcontent.md): A representation of this instance.
- [jsonString](jsonstring.md): A JSON string representation of the generated content.
- [debugDescription](debugdescription.md): A string representation for the debug description.
