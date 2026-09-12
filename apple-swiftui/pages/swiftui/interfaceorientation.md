> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/interfaceorientation](https://developer.apple.com/documentation/swiftui/interfaceorientation)

# InterfaceOrientation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The orientation of the interface from the user’s perspective.

## Declaration

```swift
struct InterfaceOrientation
```

<a id="overview"></a>

## Overview

By default, device previews appear right side up, using orientation [portrait](interfaceorientation/portrait.md). You can change the orientation with a call to the [previewInterfaceOrientation(\_:)](view/previewinterfaceorientation%28__%29.md) modifier:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewInterfaceOrientation(.landscapeRight)
    }
}
```

## Topics

### Getting an orientation

- [portrait](interfaceorientation/portrait.md): The device is in portrait mode, with the top of the device on top.
- [portraitUpsideDown](interfaceorientation/portraitupsidedown.md): The device is in portrait mode, but is upside down.
- [landscapeLeft](interfaceorientation/landscapeleft.md): The device is in landscape mode, with the top of the device on the left.
- [landscapeRight](interfaceorientation/landscaperight.md): The device is in landscape mode, with the top of the device on the right.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing a preview

- [previewDevice(\_:)](view/previewdevice%28__%29.md): Deprecated. Overrides the device for a preview.
- [PreviewDevice](previewdevice.md): Deprecated. A simulator device that runs a preview.
- [previewLayout(\_:)](view/previewlayout%28__%29.md): Deprecated. Overrides the size of the container for the preview.
- [previewInterfaceOrientation(\_:)](view/previewinterfaceorientation%28__%29.md): Deprecated. Overrides the orientation of the preview.
