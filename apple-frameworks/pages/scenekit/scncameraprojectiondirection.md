> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncameraprojectiondirection](https://developer.apple.com/documentation/scenekit/scncameraprojectiondirection)

# SCNCameraProjectionDirection (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the axis used to determine field of view or orthographic projection.

## Declaration

```swift
enum SCNCameraProjectionDirection
```

## Topics

### Projection Directions

- [SCNCameraProjectionDirection.vertical](scncameraprojectiondirection/vertical.md): The camera’s field of view or orthographic scale are measured vertically.
- [SCNCameraProjectionDirection.horizontal](scncameraprojectiondirection/horizontal.md): The camera’s field of view or orthographic scale are measured horizontally.

### Initializers

- [init(rawValue:)](scncameraprojectiondirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Field of View

- [fieldOfView](scncamera/fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](scncamera/focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](scncamera/sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](scncamera/projectiondirection.md): The axis used to determine field of view or orthographic scale.

# SCNCameraProjectionDirection (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Options for the axis used to determine field of view or orthographic projection.

## Declaration

```objectivec
enum SCNCameraProjectionDirection : NSInteger;
```

## Topics

### Projection Directions

- [SCNCameraProjectionDirectionVertical](scncameraprojectiondirection/vertical.md): The camera’s field of view or orthographic scale are measured vertically.
- [SCNCameraProjectionDirectionHorizontal](scncameraprojectiondirection/horizontal.md): The camera’s field of view or orthographic scale are measured horizontally.

## See Also

### Managing Field of View

- [fieldOfView](scncamera/fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](scncamera/focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](scncamera/sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](scncamera/projectiondirection.md): The axis used to determine field of view or orthographic scale.
