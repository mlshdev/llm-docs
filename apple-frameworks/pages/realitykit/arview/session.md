> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/session](https://developer.apple.com/documentation/realitykit/arview/session)

# session

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

The AR session that supports the view’s rendering.

## Declaration

```swift
@MainActor @preconcurrency dynamic var session: ARSession { get set }
```

<a id="discussion"></a>

## Discussion

RealityKit automatically creates a default session that the view manages. If you have an existing or custom session, setting it as the view’s session replaces the default session. If you replace the default session, you need to start it by calling [run(\_:options:)](../../arkit/arsession/run%28__options_%29.md). See [automaticallyConfigureSession](automaticallyconfiguresession.md) for more details.

When [automaticallyConfigureSession](automaticallyconfiguresession.md) is [true](https://developer.apple.com/documentation/swift/true), the default value is an [ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md).

## See Also

### Configuring the AR session

- [automaticallyConfigureSession](automaticallyconfiguresession.md): An indication of whether to use an automatically configured AR session.
- [renderOptions](renderoptions-swift.property.md): The render options that configure the view’s AR session.
- [renderCallbacks](rendercallbacks-swift.property.md): A container that holds the view’s render callbacks.
