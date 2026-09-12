> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/automaticallyconfiguresession](https://developer.apple.com/documentation/realitykit/arview/automaticallyconfiguresession)

# automaticallyConfigureSession

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

An indication of whether to use an automatically configured AR session.

## Declaration

```swift
@MainActor @preconcurrency var automaticallyConfigureSession: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When enabled, the [ARView](../arview.md) automatically runs an `RealityKit/ARSession` with a default configuration. RealityKit updates that configuration based  on t camera mode and scene anchors. When disabled, you need to provide a configuration object and run the session manually.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the AR session

- [session](session.md): The AR session that supports the view’s rendering.
- [renderOptions](renderoptions-swift.property.md): The render options that configure the view’s AR session.
- [renderCallbacks](rendercallbacks-swift.property.md): A container that holds the view’s render callbacks.
