> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/structuredsegment/schemaname

# schemaName

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A name that can be used to understand which type the content represents.

## Declaration

```swift
@backDeployed(before: iOS 27.0, macOS 27.0, visionOS 27.0)
var schemaName: String { get set }
```

```swift
var schemaName: String
```

## See Also

### Inspecting a structured segment

- [content](content.md): The content of the segment.
- [source](source.md): Deprecated. A source that can be used to understand which type the content represents.
