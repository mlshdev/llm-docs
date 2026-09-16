> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/devicehinge

# DeviceHinge

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A type encapsulating the state of a single hinge.

## Declaration

```swift
struct DeviceHinge
```

<a id="overview"></a>

## Overview

A hinge provides its angle along with a status determined by the system based on the current angle and device orientation. You use this type with the `View/onHingeChange(_:)` modifier.

```swift
@State private var hinge: DeviceHinge? = nil

var body: some View {
    VStack {
        if let hinge {
            AngleDisplayView(angle: hinge.angle)
            StatusDisplayView(status: hinge.status)
        } else {
            ContentUnavailableView(
                "Hinge Unavailable",
                systemImage: "rectangle.split.2x1")
        }
    }
    .onHingeChange { _, newContext in
        hinge = newContext.hinge
    }
}
```

In the example above, the current angle and status of the hinge will be displayed in the app as you interact with the hinge.

## Topics

### Getting hinge information

- [angle](devicehinge/angle.md): Beta. Current angle of the hinge.
- [status](devicehinge/status-swift.property.md): Beta. Current status of the hinge.
- [DeviceHinge.Status](devicehinge/status-swift.struct.md): Beta. The status of an individual hinge.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to hinge angle changes

- [onHingeChange(isEnabled:\_:)](view/onhingechange%28isenabled___%29.md): Beta. Adds an action to perform when the hinge context of the view hierarchy changes.
- [DeviceHingeContext](devicehingecontext.md): Beta. A type describing the context of hinges on the device.
