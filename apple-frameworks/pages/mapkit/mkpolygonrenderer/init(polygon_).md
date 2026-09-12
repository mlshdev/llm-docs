> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygonrenderer/init(polygon:)](https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/init(polygon:))

# init(polygon:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new renderer that handles drawing for the specified polygon overlay object.

## Declaration

```swift
init(polygon: MKPolygon)
```

## Parameters

- `polygon`: The polygon overlay containing information about the area the polygon renderer draws. This object requires at least three points defining the polygon to draw. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized polygon renderer object.

# initWithPolygon: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new renderer that handles drawing for the specified polygon overlay object.

## Declaration

```objectivec
- (instancetype) initWithPolygon:(MKPolygon *) polygon;
```

## Parameters

- `polygon`: The polygon overlay containing information about the area the polygon renderer draws. This object requires at least three points defining the polygon to draw. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized polygon renderer object.
