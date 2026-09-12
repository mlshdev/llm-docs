> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/init(hvglloader:reusable:)](https://developer.apple.com/documentation/hvf/partrenderer/init(hvglloader:reusable:))

# init(hvglLoader:reusable:)

**Framework:** hvf  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Use a loader specific to an HVGL table in memory Setting reusable to true preserves the input parameter values when rendering; otherwise they are destroyed by rendering

## Declaration

```swift
init(hvglLoader: HVGLPartLoader, reusable: Bool = false)
```
