> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/responseformat/init(type:)

# init(type:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a response format with type you specify.

## Declaration

```swift
init<Content>(type: Content.Type) where Content : Generable
```

## Parameters

- `type`: A [Generable](../../generable.md) type to use as the response format.

## See Also

### Creating a response format

- [init(schema:)](init%28schema_%29.md): Creates a response format with a schema.
