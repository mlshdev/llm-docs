> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/render(to:)](https://developer.apple.com/documentation/hvf/partrenderer/render(to:))

# render(to:)

**Framework:** hvf  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Render the current part using the current parameters using the supplied render context If the PartRenderer was created using reusable, all input parameters are intact afterwards; otherwise they are destroyed Returns true if rendering was successful

## Declaration

```swift
func render(to context: @escaping (PartRenderer.Instruction) -> PartRenderer.Action) -> Bool
```
