> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/name](https://developer.apple.com/documentation/foundationmodels/tool/name)

# name

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A unique name for the tool, such as “get_weather”, “toggleDarkMode”, or “search contacts”.

## Declaration

```swift
var name: String { get }
```

## Default Implementations

### Tool Implementations

- [name](name-6x7wj.md): A unique name for the tool, such as “get_weather”, “toggleDarkMode”, or “search contacts”.

## See Also

### Inspecting a tool

- [description](description.md): A natural language description of when and how to use the tool.
- [parameters](parameters.md): A schema for the parameters this tool accepts.
- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether the tool’s name, description, and parameters schema are injected into the instructions of sessions that leverage this tool.
- [Tool.SessionProperty](sessionproperty.md)
