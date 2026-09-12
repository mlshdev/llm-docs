> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofilegroupresource/load(named:from:in:)](https://developer.apple.com/documentation/realitykit/audiofilegroupresource/load(named:from:in:))

# load(named:from:in:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Loads an audio resource from a Reality Composer Pro project.

## Declaration

```swift
@MainActor @preconcurrency static func load(named name: String, from scene: String, in bundle: Bundle? = nil) throws -> AudioFileGroupResource
```

## Parameters

- `name`: The USD Prim path to the resource in the Reality Composer Pro project to load.
- `scene`: The name of the Reality Composer Pro scene to load from.
- `bundle`: The bundle that contains the project. Leave `nil` to load from the app’s bundle.

<a id="discussion"></a>

## Discussion

This method loads a preconfigured [AudioFileGroupResource](../audiofilegroupresource.md) from a scene in a Reality Composer Pro project.

> **Important**

> The name provided **must** be unique.

## See Also

### Creating a resource

- [init(\_:)](init%28__%29.md): Creates a group resource from an array of audio file resources (backward compatibility).
- [init(named:from:in:)](init%28named_from_in_%29.md): Initializes an audio resource from a Reality Composer Pro project.
