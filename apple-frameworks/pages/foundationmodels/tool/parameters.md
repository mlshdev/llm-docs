> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/tool/parameters

# parameters

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A schema for the parameters this tool accepts.

## Declaration

```swift
var parameters: GenerationSchema { get }
```

## Default Implementations

### Tool Implementations

- [parameters](parameters-590v0.md): Conforms when `Arguments` conforms to `Generable`. A schema for the parameters this tool accepts.

## See Also

### Inspecting a tool

- [name](name.md): A unique name for the tool.
- [description](description.md): A natural language description of when and how to use the tool.
- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether the framework includes this tool’s definition in the session’s instructions.
- [Tool.SessionProperty](sessionproperty.md): A property wrapper that provides access to a session property from within a tool.
