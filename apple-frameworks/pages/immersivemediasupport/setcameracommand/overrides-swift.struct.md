> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/setcameracommand/overrides-swift.struct](https://developer.apple.com/documentation/immersivemediasupport/setcameracommand/overrides-swift.struct)

# SetCameraCommand.Overrides

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Override camera/venue params

## Declaration

```swift
struct Overrides
```

<a id="overview"></a>

## Overview

> **Note**

> The renderer only honors these overrides on visionOS 27, macOS 27, or later. Earlier runtimes ignore them during playback.

## Topics

### Initializers

- [init(rotation:lensDefinitionData:maskData:)](overrides-swift.struct/init%28rotation_lensdefinitiondata_maskdata_%29.md)

### Instance Properties

- [lensDefinitionData](overrides-swift.struct/lensdefinitiondata.md): Inline lens definition (ILPD) data to override lens calibration
- [maskData](overrides-swift.struct/maskdata.md): Dynamic mask data to override camera mask
- [rotation](overrides-swift.struct/rotation.md): Camera rotation to override the rotation in [pose](../immersivecamera/pose.md).

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
