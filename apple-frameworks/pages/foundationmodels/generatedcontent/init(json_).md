> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/init(json:)](https://developer.apple.com/documentation/foundationmodels/generatedcontent/init(json:))

# init(json:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates equivalent content from a JSON string.

## Declaration

```swift
init(json: String) throws
```

<a id="discussion"></a>

## Discussion

The JSON string you provide may be incomplete. This is useful for correctly handling partially generated responses.

```swift
@Generable struct NovelIdea {
  let title: String
}

let partial = #"{"title": "A story of"#
let content = try GeneratedContent(json: partial)
let idea = try NovelIdea(content)
print(idea.title) // A story of
```

## See Also

### Creating generated content

- [init(\_:)](init%28__%29.md): Creates generated content from another value.
- [init(\_:id:)](init%28__id_%29.md): Creates content that contains a single value with a custom generation identifier.
- [init(elements:id:)](init%28elements_id_%29.md): Creates content representing an array of elements you specify.
- [init(properties:id:)](init%28properties_id_%29.md): Creates generated content representing a structure with the properties you specify.
- [init(properties:id:uniquingKeysWith:)](init%28properties_id_uniquingkeyswith_%29.md): Creates generated content from key-value pairs, resolving duplicate keys with a combining closure.
- [init(kind:id:)](init%28kind_id_%29.md): Creates content with the specified kind and generation identifier.
- [GeneratedContent.ParsingError](parsingerror.md): A failure that occurs when a string cannot be parsed into GeneratedContent.
