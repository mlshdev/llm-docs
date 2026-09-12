> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackobjectrequest/init(detectedobjectobservation:completionhandler:)](https://developer.apple.com/documentation/vision/vntrackobjectrequest/init(detectedobjectobservation:completionhandler:))

# init(detectedObjectObservation:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new object tracking request with a detected object observation.

## Declaration

```swift
init(detectedObjectObservation observation: VNDetectedObjectObservation, completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `observation`: A detected object observation with bounding box information.
- `completionHandler`: The callback to invoke after performing the request.

## See Also

### Initializing an Object Tracking Request

- [init(detectedObjectObservation:)](init%28detectedobjectobservation_%29.md): Creates a new object tracking request with a detected object observation.

# initWithDetectedObjectObservation:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new object tracking request with a detected object observation.

## Declaration

```objectivec
- (instancetype) initWithDetectedObjectObservation:(VNDetectedObjectObservation *) observation completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `observation`: A detected object observation with bounding box information.
- `completionHandler`: The callback to invoke after performing the request.

## See Also

### Initializing an Object Tracking Request

- [initWithDetectedObjectObservation:](init%28detectedobjectobservation_%29.md): Creates a new object tracking request with a detected object observation.
