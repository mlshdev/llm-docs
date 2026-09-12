> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessiondelegate/session(_:didupdate:)-9v2kw](https://developer.apple.com/documentation/arkit/arsessiondelegate/session(_:didupdate:)-9v2kw)

# session(\_:didUpdate:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Provides a newly captured camera image and accompanying AR information to the delegate.

## Declaration

```swift
optional func session(_ session: ARSession, didUpdate frame: ARFrame)
```

## Parameters

- `session`: The session providing information.
- `frame`: An object containing the new camera image and AR information.

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

<a id="Discussion"></a>

## Discussion

Implement this method if you provide your own display for rendering an AR experience. The provided [ARFrame](../arframe.md) object contains the latest image captured from the device camera, which you can render as a scene background, as well as information about camera parameters and anchor transforms you can use for rendering virtual content on top of the camera image.

# session:didUpdateFrame: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Provides a newly captured camera image and accompanying AR information to the delegate.

## Declaration

```objectivec
- (void) session:(ARSession *) session didUpdateFrame:(ARFrame *) frame;
```

## Parameters

- `session`: The session providing information.
- `frame`: An object containing the new camera image and AR information.

## Mentioned In

- [Displaying an AR Experience with Metal](../displaying-an-ar-experience-with-metal.md)

<a id="Discussion"></a>

## Discussion

Implement this method if you provide your own display for rendering an AR experience. The provided [ARFrame](../arframe.md) object contains the latest image captured from the device camera, which you can render as a scene background, as well as information about camera parameters and anchor transforms you can use for rendering virtual content on top of the camera image.
