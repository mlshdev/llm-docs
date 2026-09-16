> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/devicehingecontext

# DeviceHingeContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A type describing the context of hinges on the device.

## Declaration

```swift
struct DeviceHingeContext
```

<a id="overview"></a>

## Overview

You use this type with the `View/onHingeChange(_:)` view modifier.

## Topics

### Getting hinge context information

- [hinge](devicehingecontext/hinge.md): Beta. The current hinge of the device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to hinge angle changes

- [onHingeChange(isEnabled:\_:)](view/onhingechange%28isenabled___%29.md): Beta. Adds an action to perform when the hinge context of the view hierarchy changes.
- [DeviceHinge](devicehinge.md): Beta. A type encapsulating the state of a single hinge.
