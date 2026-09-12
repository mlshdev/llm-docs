> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiofilegroupresource/init(_:)](https://developer.apple.com/documentation/realitykit/audiofilegroupresource/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a group resource from an array of audio file resources (backward compatibility).

## Declaration

```swift
@MainActor @preconcurrency init(_ resources: [AudioFileResource]) throws
```

## Parameters

- `resources`: The audio file resources for the group

<a id="discussion"></a>

## Discussion

This initializer maintains backward compatibility with existing code that doesn’t specify configuration.

> **Throws**

> An error if the provided array is empty or if the underlying audio assets do not have matching channel layouts.

## See Also

### Creating a resource

- [init(named:from:in:)](init%28named_from_in_%29.md): Initializes an audio resource from a Reality Composer Pro project.
- [load(named:from:in:)](load%28named_from_in_%29.md): Loads an audio resource from a Reality Composer Pro project.
