> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/includesschemaininstructions](https://developer.apple.com/documentation/foundationmodels/tool/includesschemaininstructions)

# includesSchemaInInstructions

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A Boolean value that indicates whether the tool’s name, description, and parameters schema are injected into the instructions of sessions that leverage this tool.

## Declaration

```swift
var includesSchemaInInstructions: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default implementation is `true`

> **Note**

> This should only be `false` if the model has been trained to have innate knowledge of this tool. For zero-shot prompting, it should always be `true`.

## Default Implementations

### Tool Implementations

- [includesSchemaInInstructions](includesschemaininstructions-2yllg.md): A Boolean value that indicates whether the tool’s name, description, and parameters schema are injected into the instructions of sessions that leverage this tool.

## See Also

### Inspecting a tool

- [name](name.md): A unique name for the tool, such as “get_weather”, “toggleDarkMode”, or “search contacts”.
- [description](description.md): A natural language description of when and how to use the tool.
- [parameters](parameters.md): A schema for the parameters this tool accepts.
- [Tool.SessionProperty](sessionproperty.md)
