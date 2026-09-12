> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/init(input:configuration:)-wo4e](https://developer.apple.com/documentation/realitykit/photogrammetrysession/init(input:configuration:)-wo4e)

# init(input:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a session from a specified directory of images.

## Declaration

```swift
convenience init(input: URL, configuration: PhotogrammetrySession.Configuration = Configuration()) throws
```

## Parameters

- `input`: The directory [URL](../../foundation/url.md) containing a folder of images to use as reconstruction inputs.
- `configuration`: The configuration to use for this session.

<a id="discussion"></a>

## Discussion

Creates a new session instance using all images in the specified [URL](../../foundation/url.md) input directory [URL](../../foundation/url.md) as samples for reconstruction.

> **Throws**

> If `input` is not a file [URL](../../foundation/url.md).

## See Also

### Creating the session

- [init(input:configuration:)](init%28input_configuration_%29-7glmh.md): Creates a session from a sequence of samples.
- [isSupported](issupported.md): Returns `true` if the current hardware supports Object Capture.
