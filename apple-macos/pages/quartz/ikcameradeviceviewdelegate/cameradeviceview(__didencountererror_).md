> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceviewdelegate/cameradeviceview(_:didencountererror:)](https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate/cameradeviceview(_:didencountererror:))

# cameraDeviceView(\_:didEncounterError:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the camera encounters an error.

## Declaration

```swift
optional func cameraDeviceView(_ cameraDeviceView: IKCameraDeviceView!, didEncounterError error: (any Error)!)
```

## Parameters

- `cameraDeviceView`: The camera device view that sent the message.
- `error`: The error.

# cameraDeviceView:didEncounterError: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Invoked when the camera encounters an error.

## Declaration

```objectivec
- (void) cameraDeviceView:(IKCameraDeviceView *) cameraDeviceView didEncounterError:(NSError *) error;
```

## Parameters

- `cameraDeviceView`: The camera device view that sent the message.
- `error`: The error.
