> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/options](https://developer.apple.com/documentation/realitykit/portalcomponent/options)

# PortalComponent.Options

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Options to toggle the portal features on and off.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

This option set is equivalent to setting [clippingMode](clippingmode-swift.property.md) and [crossingMode](crossingmode-swift.property.md) directly.

Use this type with [init(target:plane:options:)](init%28target_plane_options_%29.md).

## Topics

### Type Properties

- [allowCrossing](options/allowcrossing.md): An option that enables the crossing feature.
- [clipContents](options/clipcontents.md): An option that enables the clipping feature.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
