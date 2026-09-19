> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokepathreference/init(controlpoints:creationdate:strokepathid:)

# init(controlPoints:creationDate:strokePathID:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke path with the specified control points and a unique identifier.

## Declaration

```swift
convenience init(controlPoints: [PKStrokePoint], creationDate: Date, strokePathID: UUID)
```

## Parameters

- `controlPoints`: An array of control points for a cubic B-spline.
- `creationDate`: The start time of this path.
- `strokePathID`: The unique identity of the stroke path.

<a id="discussion"></a>

## Discussion

> **Warning**

> Using multiple stroke paths with identical IDs but different control points will result in undefined rendering behavior. Ensure each stroke path has a unique identifier.

# initWithControlPoints:creationDate:strokePathID: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke path with the specified control points and a unique identifier.

## Declaration

```objectivec
- (instancetype) initWithControlPoints:(NSArray<PKStrokePoint *> *) controlPoints creationDate:(NSDate *) creationDate strokePathID:(NSUUID *) strokePathID;
```

## Parameters

- `controlPoints`: An array of control points for a cubic B-spline.
- `creationDate`: The start time of this path.
- `strokePathID`: The unique identity of the stroke path.

<a id="discussion"></a>

## Discussion

> **Warning**

> Using multiple stroke paths with identical IDs but different control points will result in undefined rendering behavior. Ensure each stroke path has a unique identifier.
