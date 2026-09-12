> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacehmcamera/setcamerasource(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacehmcamera/setcamerasource(_:))

# setCameraSource(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Set the HomeKit camera source displayed by this interface object.

## Declaration

```swift
func setCameraSource(_ cameraSource: HMCameraSource?)
```

## Parameters

- `cameraSource`: A HomeKit camera source, representing a video stream or a single snapshot from an IP camera.

<a id="Discussion"></a>

## Discussion

Pass `nil` to clear the camera source.

# setCameraSource: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Set the HomeKit camera source displayed by this interface object.

## Declaration

```objectivec
- (void) setCameraSource:(HMCameraSource *) cameraSource;
```

## Parameters

- `cameraSource`: A HomeKit camera source, representing a video stream or a single snapshot from an IP camera.

<a id="Discussion"></a>

## Discussion

Pass `nil` to clear the camera source.
