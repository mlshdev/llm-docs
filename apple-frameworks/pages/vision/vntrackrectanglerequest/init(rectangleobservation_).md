> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackrectanglerequest/init(rectangleobservation:)](https://developer.apple.com/documentation/vision/vntrackrectanglerequest/init(rectangleobservation:))

# init(rectangleObservation:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new rectangle tracking request with a rectangle observation.

## Declaration

```swift
convenience init(rectangleObservation observation: VNRectangleObservation)
```

## Parameters

- `observation`: A rectangle observation with bounding box and corner location information.

## See Also

### Initializing a Rectangle Tracking Request

- [init(rectangleObservation:completionHandler:)](init%28rectangleobservation_completionhandler_%29.md): Creates a new rectangle tracking request with a rectangle observation.

# initWithRectangleObservation: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new rectangle tracking request with a rectangle observation.

## Declaration

```objectivec
- (instancetype) initWithRectangleObservation:(VNRectangleObservation *) observation;
```

## Parameters

- `observation`: A rectangle observation with bounding box and corner location information.

## See Also

### Initializing a Rectangle Tracking Request

- [initWithRectangleObservation:completionHandler:](init%28rectangleobservation_completionhandler_%29.md): Creates a new rectangle tracking request with a rectangle observation.
