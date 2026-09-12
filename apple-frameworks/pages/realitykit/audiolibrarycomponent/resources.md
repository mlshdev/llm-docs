> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiolibrarycomponent/resources](https://developer.apple.com/documentation/realitykit/audiolibrarycomponent/resources)

# resources

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A dictionary of audio resources with user-defined names.

## Declaration

```swift
var resources: [String : AudioResource]
```

<a id="discussion"></a>

## Discussion

The values can be any [AudioResource](../audioresource.md) type, such as [AudioFileResource](../audiofileresource.md) or [AudioFileGroupResource](../audiofilegroupresource.md). In memory, you can also use [AudioBufferResource](../audiobufferresource.md), but this type doesn’t support serializing to disk or sharing via network.
