> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/onhingechange(isenabled:_:)

# onHingeChange(isEnabled:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

Adds an action to perform when the hinge context of the view hierarchy changes.

## Declaration

```swift
nonisolated func onHingeChange(isEnabled: Bool = true, _ action: @escaping (DeviceHingeContext, DeviceHingeContext) -> Void) -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier to be informed of changes to the hinge context of the device.

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

## See Also

### Responding to hinge angle changes

- [DeviceHingeContext](../devicehingecontext.md): A type describing the context of hinges on the device.
- [DeviceHinge](../devicehinge.md): A type encapsulating the state of a single hinge.
