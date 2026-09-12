> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference/init(controlpoints:creationdate:)](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/init(controlpoints:creationdate:))

# init(controlPoints:creationDate:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a stroke path with the cubic B-spline control points and a date that you specify.

## Declaration

```swift
init(controlPoints: [PKStrokePoint], creationDate: Date)
```

## Parameters

- `controlPoints`: An array of control points for a cubic B-spline.
- `creationDate`: The creation time of this path. The `timeOffset` of points in this stroke path is relative to this date.

# initWithControlPoints:creationDate: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a stroke path with the cubic B-spline control points and a date that you specify.

## Declaration

```objectivec
- (instancetype) initWithControlPoints:(NSArray<PKStrokePoint *> *) controlPoints creationDate:(NSDate *) creationDate;
```

## Parameters

- `controlPoints`: An array of control points for a cubic B-spline.
- `creationDate`: The creation time of this path. The `timeOffset` of points in this stroke path is relative to this date.
