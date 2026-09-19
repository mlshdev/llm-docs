> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generatedcontent/parsingerror/underlyingerror

# underlyingError

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The underlying error that caused the parsing failure, if any.

## Declaration

```swift
var underlyingError: (any Error)?
```

## See Also

### Inspecting the instance

- [rawContent](rawcontent.md): The raw content that could not be parsed.
- [debugDescription](debugdescription.md): A debug description of what failed to parse.
