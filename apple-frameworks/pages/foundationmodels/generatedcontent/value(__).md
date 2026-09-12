> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/value(_:)](https://developer.apple.com/documentation/foundationmodels/generatedcontent/value(_:))

# value(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Reads a top level, concrete partially generable type from a named property.

## Declaration

```swift
func value<Value>(_ type: Value.Type = Value.self) throws -> Value where Value : ConvertibleFromGeneratedContent
```

## See Also

### Accessing the content

- [kind](kind-swift.property.md): The representation of the generated content.
- [GeneratedContent.Kind](kind-swift.enum.md): A representation of the different types of content that can be stored in generated content.
- [value(\_:forProperty:)](value%28__forproperty_%29.md): Reads a concrete generable type from a named property.
- [isComplete](iscomplete.md): A Boolean value that indicates whether the generated content is complete.
- [generatedContent](generatedcontent.md): A representation of this instance.
- [jsonString](jsonstring.md): A JSON string representation of the generated content.
- [debugDescription](debugdescription.md): A string representation for the debug description.
