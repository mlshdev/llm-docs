> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbillboardaxis](https://developer.apple.com/documentation/scenekit/scnbillboardaxis)

# SCNBillboardAxis (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for locking the orientation of nodes affected by a billboard constraint.

## Declaration

```swift
struct SCNBillboardAxis
```

<a id="overview"></a>

## Overview

The figure below shows the effects of constraining various axes.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929767@2x.png)

## Topics

### Constants

- [X](scnbillboardaxis/x.md): Align an affected node such that its x-axis is always parallel to that of the view, leaving it free to rotate otherwise.
- [Y](scnbillboardaxis/y.md): Align an affected node such that its y-axis is always parallel to that of the view, leaving it free to rotate otherwise.
- [Z](scnbillboardaxis/z.md): Align an affected node such that its z-axis is always perpendicular to the viewing plane, leaving it free to rotate otherwise.
- [all](scnbillboardaxis/all.md): Align an affected node such that its orientation always matches that of the view.

### Initializers

- [init(rawValue:)](scnbillboardaxis/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SCNBillboardAxis (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for locking the orientation of nodes affected by a billboard constraint.

## Declaration

```objectivec
enum SCNBillboardAxis : NSUInteger;
```

<a id="overview"></a>

## Overview

The figure below shows the effects of constraining various axes.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929767@2x.png)

## Topics

### Constants

- [SCNBillboardAxisX](scnbillboardaxis/x.md): Align an affected node such that its x-axis is always parallel to that of the view, leaving it free to rotate otherwise.
- [SCNBillboardAxisY](scnbillboardaxis/y.md): Align an affected node such that its y-axis is always parallel to that of the view, leaving it free to rotate otherwise.
- [SCNBillboardAxisZ](scnbillboardaxis/z.md): Align an affected node such that its z-axis is always perpendicular to the viewing plane, leaving it free to rotate otherwise.
- [SCNBillboardAxisAll](scnbillboardaxis/all.md): Align an affected node such that its orientation always matches that of the view.
