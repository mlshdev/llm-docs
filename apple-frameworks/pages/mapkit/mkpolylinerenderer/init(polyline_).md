> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/init(polyline:)

# init(polyline:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new overlay view using the specified polyline overlay object.

## Declaration

```swift
init(polyline: MKPolyline)
```

## Parameters

- `polyline`: The polyline overlay containing information about the area the renderer draws. This object requires at least two points defining the line segment to draw. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized polyline renderer object.

# initWithPolyline: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new overlay view using the specified polyline overlay object.

## Declaration

```objectivec
- (instancetype) initWithPolyline:(MKPolyline *) polyline;
```

## Parameters

- `polyline`: The polyline overlay containing information about the area the renderer draws. This object requires at least two points defining the line segment to draw. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized polyline renderer object.
