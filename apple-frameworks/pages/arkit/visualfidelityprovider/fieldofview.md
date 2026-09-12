> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelityprovider/fieldofview](https://developer.apple.com/documentation/arkit/visualfidelityprovider/fieldofview)

# VisualFidelityProvider.FieldOfView

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

A field of view (FoV) specification.

## Declaration

```swift
struct FieldOfView
```

<a id="overview"></a>

## Overview

The preset FoVs are the recommended specification method for most applications. They provide standardized FoV requirements.

## Topics

### Instance Properties

- [description](fieldofview/description.md): A textual representation of the field of view.
- [isValid](fieldofview/isvalid.md): Validates whether this field of view specification is valid.

### Type Properties

- [presetA](fieldofview/preseta.md): Preset field of view A.
- [presetB](fieldofview/presetb.md): Preset field of view B.
- [presetC](fieldofview/presetc.md): Preset field of view C.
- [presetD](fieldofview/presetd.md): Preset field of view D.

### Type Methods

- [polygon(points:)](fieldofview/polygon%28points_%29.md): Creates a polygon-based field of view.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
