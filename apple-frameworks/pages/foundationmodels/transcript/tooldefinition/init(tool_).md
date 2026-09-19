> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/tooldefinition/init(tool:)

# init(tool:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a tool definition that describes the tool you provide.

## Declaration

```swift
init(tool: some Tool)
```

## Parameters

- `tool`: The tool whose name, description, and parameters describe the definition.

## See Also

### Creating a tool definition

- [init(name:description:parameters:)](init%28name_description_parameters_%29.md): Creates a tool definition with the name, description, and parameter schema you provide.
