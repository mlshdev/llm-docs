> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/option](https://developer.apple.com/documentation/scenekit/scnview/option)

# SCNView.Option (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Dictionary keys specifying initialization options, used when initializing a SceneKit view.

## Declaration

```swift
struct Option
```

## Topics

### View Options

- [preferLowPowerDevice](option/preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [preferredDevice](option/preferreddevice.md): The device to use for Metal rendering.
- [preferredRenderingAPI](option/preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).

### Initializers

- [init(rawValue:)](option/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Initializing a SceneKit View

- [init(frame:options:)](init%28frame_options_%29.md): Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.

# SCNViewOption (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Dictionary keys specifying initialization options, used when initializing a SceneKit view.

## Declaration

```objectivec
typedef NSString * SCNViewOption;
```

## Topics

### View Options

- [SCNPreferLowPowerDeviceKey](option/preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [SCNPreferredDeviceKey](option/preferreddevice.md): The device to use for Metal rendering.
- [SCNPreferredRenderingAPIKey](option/preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).

## See Also

### Initializing a SceneKit View

- [initWithFrame:options:](init%28frame_options_%29.md): Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.
