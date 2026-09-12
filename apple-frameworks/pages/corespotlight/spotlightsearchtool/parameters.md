> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/parameters](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/parameters)

# parameters

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The schema for the parameters this tool accepts.

## Declaration

```swift
var parameters: GenerationSchema { get }
```

<a id="discussion"></a>

## Discussion

The Spotlight search tool implements this property as part of its conformance to the [Tool](../../foundationmodels/tool.md) protocol.

## See Also

### Getting tool-specific properties

- [includesSchemaInInstructions](includesschemaininstructions.md): A Boolean value that indicates whether to inject the model’s name, description, and parameters schema into the instructions of sessions.
