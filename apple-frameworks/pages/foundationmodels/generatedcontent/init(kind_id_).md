> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/init(kind:id:)](https://developer.apple.com/documentation/foundationmodels/generatedcontent/init(kind:id:))

# init(kind:id:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates content with the specified kind and generation identifier.

## Declaration

```swift
init(kind: GeneratedContent.Kind, id: GenerationID? = nil)
```

## Parameters

- `kind`: The kind of content to create.
- `id`: An optional [GenerationID](../generationid.md) to associate with this content.

<a id="discussion"></a>

## Discussion

This initializer provides a convenient way to create content from its kind representation.

## See Also

### Creating generated content

- [init(\_:)](init%28__%29.md): Creates generated content from another value.
- [init(\_:id:)](init%28__id_%29.md): Creates content that contains a single value with a custom generation identifier.
- [init(elements:id:)](init%28elements_id_%29.md): Creates content representing an array of elements you specify.
- [init(properties:id:)](init%28properties_id_%29.md): Creates generated content representing a structure with the properties you specify.
- [init(properties:id:uniquingKeysWith:)](init%28properties_id_uniquingkeyswith_%29.md): Creates generated content from key-value pairs, resolving duplicate keys with a combining closure.
- [init(json:)](init%28json_%29.md): Creates equivalent content from a JSON string.
- [GeneratedContent.ParsingError](parsingerror.md): A failure that occurs when a string cannot be parsed into GeneratedContent.
