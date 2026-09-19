> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/tool/includesschemaininstructions-2yllg

# includesSchemaInInstructions

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A Boolean value that indicates whether the framework includes this tool’s definition in the session’s instructions.

## Declaration

```swift
var includesSchemaInInstructions: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default implementation is `true`

> **Note**

> This should only be `false` if the model has been trained to have innate knowledge of this tool. For zero-shot prompting, it should always be `true`.
