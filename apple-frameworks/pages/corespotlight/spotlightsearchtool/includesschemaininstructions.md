> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/includesschemaininstructions

# includesSchemaInInstructions

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to inject the model’s name, description, and parameters schema into the instructions of sessions.

## Declaration

```swift
var includesSchemaInInstructions: Bool { get }
```

<a id="discussion"></a>

## Discussion

The Spotlight search tool implements this property as part of its conformance to the [Tool](../../foundationmodels/tool.md) protocol.

## See Also

### Getting tool-specific properties

- [parameters](parameters.md): The schema for the parameters this tool accepts.
