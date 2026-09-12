> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackobjectrequest/init(detectedobjectobservation:)](https://developer.apple.com/documentation/vision/vntrackobjectrequest/init(detectedobjectobservation:))

# init(detectedObjectObservation:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new object tracking request with a detected object observation.

## Declaration

```swift
init(detectedObjectObservation observation: VNDetectedObjectObservation)
```

## Parameters

- `observation`: A detected object observation with bounding box information.

## See Also

### Initializing an Object Tracking Request

- [init(detectedObjectObservation:completionHandler:)](init%28detectedobjectobservation_completionhandler_%29.md): Creates a new object tracking request with a detected object observation.

# initWithDetectedObjectObservation: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new object tracking request with a detected object observation.

## Declaration

```objectivec
- (instancetype) initWithDetectedObjectObservation:(VNDetectedObjectObservation *) observation;
```

## Parameters

- `observation`: A detected object observation with bounding box information.

## See Also

### Initializing an Object Tracking Request

- [initWithDetectedObjectObservation:completionHandler:](init%28detectedobjectobservation_completionhandler_%29.md): Creates a new object tracking request with a detected object observation.
