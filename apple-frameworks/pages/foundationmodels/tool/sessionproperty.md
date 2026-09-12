> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/tool/sessionproperty](https://developer.apple.com/documentation/foundationmodels/tool/sessionproperty)

# Tool.SessionProperty

**Framework:** Foundation Models  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
typealias SessionProperty = LanguageModelSession.SessionProperty
```

## See Also

### Inspecting a tool

- [name](name.md): A unique name for the tool, such as “get_weather”, “toggleDarkMode”, or “search contacts”.
- [description](description.md): A natural language description of when and how to use the tool.
- [parameters](parameters.md): A schema for the parameters this tool accepts.
- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether the tool’s name, description, and parameters schema are injected into the instructions of sessions that leverage this tool.
