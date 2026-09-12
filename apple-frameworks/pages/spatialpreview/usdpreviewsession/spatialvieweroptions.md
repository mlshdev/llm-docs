> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/spatialvieweroptions](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/spatialvieweroptions)

# USDPreviewSession.SpatialViewerOptions

**Framework:** SpatialPreview  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS

Configuration options that control interaction capabilities for a USD document session.

## Declaration

```swift
struct SpatialViewerOptions
```

<a id="overview"></a>

## Overview

Use these options to specify what features are available to users during a remote preview session. Options can be combined using standard `OptionSet` syntax to create custom configurations.

## Topics

### Instance Properties

- [description](spatialvieweroptions/description.md): A human-readable description of the enabled options.

### Type Properties

- [annotations](spatialvieweroptions/annotations.md): Enables annotation capabilities during the `USDPreviewSession`.
- [default](spatialvieweroptions/default.md): The default configuration enabling all available interaction capabilities.
- [export](spatialvieweroptions/export.md): Enables export capabilities during the `USDPreviewSession`
- [perObjectManipulation](spatialvieweroptions/perobjectmanipulation.md): Enables per-object manipulation capabilities during the `USDPreviewSession`.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
