> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generatedcontent/parsingerror/init(rawcontent:underlyingerror:debugdescription:)](https://developer.apple.com/documentation/foundationmodels/generatedcontent/parsingerror/init(rawcontent:underlyingerror:debugdescription:))

# init(rawContent:underlyingError:debugDescription:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a parsing failure value.

## Declaration

```swift
init(rawContent: String, underlyingError: (any Error)? = nil, debugDescription: String)
```

## Parameters

- `rawContent`: The raw content that could not be parsed.
- `underlyingError`: The underlying error that caused the parsing failure, if any.
- `debugDescription`: A debug description of what failed to parse.
