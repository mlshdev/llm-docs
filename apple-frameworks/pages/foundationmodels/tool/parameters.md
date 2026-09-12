> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/parameters](https://developer.apple.com/documentation/foundationmodels/tool/parameters)

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

- [name](name.md): A unique name for the tool, such as “get_weather”, “toggleDarkMode”, or “search contacts”.
- [description](description.md): A natural language description of when and how to use the tool.
- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether the tool’s name, description, and parameters schema are injected into the instructions of sessions that leverage this tool.
- [Tool.SessionProperty](sessionproperty.md)
