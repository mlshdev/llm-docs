> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationschema/property/init(name:description:type:guides:)](https://developer.apple.com/documentation/foundationmodels/generationschema/property/init(name:description:type:guides:))

# init(name:description:type:guides:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a property that contains a string type.

## Declaration

```swift
init<RegexOutput>(name: String, description: String? = nil, type: String.Type, guides: [Regex<RegexOutput>] = [])
```

## Parameters

- `name`: The property’s name.
- `description`: A natural language description of what content should be generated for this property.
- `type`: The type this property represents.
- `guides`: An array of regexes to apply to this string. If the array contains multiple regexes, only the last one applies.
