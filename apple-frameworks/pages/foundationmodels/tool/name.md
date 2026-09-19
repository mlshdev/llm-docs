> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/tool/name

# name

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A unique name for the tool.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

Use whichever style reads best in your codebase, such as `get_weather`, `toggleDarkMode`, or `search contacts`.

## Default Implementations

### Tool Implementations

- [name](name-6x7wj.md): A unique name for the tool.

## See Also

### Inspecting a tool

- [description](description.md): A natural language description of when and how to use the tool.
- [parameters](parameters.md): A schema for the parameters this tool accepts.
- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether the framework includes this tool’s definition in the session’s instructions.
- [Tool.SessionProperty](sessionproperty.md): A property wrapper that provides access to a session property from within a tool.
