> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vntrackrectanglerequest/init(rectangleobservation:completionhandler:)

# init(rectangleObservation:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new rectangle tracking request with a rectangle observation.

## Declaration

```swift
init(rectangleObservation observation: VNRectangleObservation, completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `observation`: A rectangle observation with bounding box and corner location information.
- `completionHandler`: The block to invoke after performing the request.

## See Also

### Initializing a Rectangle Tracking Request

- [init(rectangleObservation:)](init%28rectangleobservation_%29.md): Creates a new rectangle tracking request with a rectangle observation.

# initWithRectangleObservation:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new rectangle tracking request with a rectangle observation.

## Declaration

```objectivec
- (instancetype) initWithRectangleObservation:(VNRectangleObservation *) observation completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `observation`: A rectangle observation with bounding box and corner location information.
- `completionHandler`: The block to invoke after performing the request.

## See Also

### Initializing a Rectangle Tracking Request

- [initWithRectangleObservation:](init%28rectangleobservation_%29.md): Creates a new rectangle tracking request with a rectangle observation.
