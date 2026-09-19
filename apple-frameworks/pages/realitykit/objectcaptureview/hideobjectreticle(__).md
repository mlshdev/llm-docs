> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcaptureview/hideobjectreticle(_:)

# hideObjectReticle(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Hides the object selection reticle when the session is in `.ready` state if set to true. Example: ObjectCaptureView(session: mySession) .hideObjectReticle()

## Declaration

```swift
@MainActor @preconcurrency func hideObjectReticle(_ value: Bool = true) -> ObjectCaptureView<Overlay>
```

<a id="discussion"></a>

## Discussion

It can also be passed a value if there is a state variable controlling it:

ObjectCaptureView(session: mySession) .hideObjectReticle(shouldHideObjectReticle)

Other modifiers can be chained to build the final view: ObjectCaptureView(session: mySession) .hideObjectReticle() .transition(.opacity)
