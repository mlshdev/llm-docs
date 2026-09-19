> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/tooldefinition/init(name:description:parameters:)

# init(name:description:parameters:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a tool definition with the name, description, and parameter schema you provide.

## Declaration

```swift
init(name: String, description: String, parameters: GenerationSchema)
```

## Parameters

- `name`: The name of the tool.
- `description`: A description of how and when to use the tool.
- `parameters`: A schema that specifies the parameters of the tool.

## See Also

### Creating a tool definition

- [init(tool:)](init%28tool_%29.md): Creates a tool definition that describes the tool you provide.
