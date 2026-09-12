> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/init(overlay:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/init(overlay:))

# init(overlay:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates and returns the overlay renderer and associates it with the specified overlay object.

## Declaration

```swift
init(overlay: any MKOverlay)
```

## Parameters

- `overlay`: The overlay object to use when drawing the overlay content on the map. This object provides the data needed to draw the overlay’s shape. The overlay renderer stores a strong reference to this object.

<a id="return-value"></a>

## Return Value

An initialized overlay renderer object.

<a id="Discussion"></a>

## Discussion

Initially, the overlay renderer assumes that the overlay is fully opaque and that it has a content scale factor of 1.0. You can change these values as needed using the [alpha](alpha.md) and [contentScaleFactor](contentscalefactor.md) properties.

# initWithOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates and returns the overlay renderer and associates it with the specified overlay object.

## Declaration

```objectivec
- (instancetype) initWithOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object to use when drawing the overlay content on the map. This object provides the data needed to draw the overlay’s shape. The overlay renderer stores a strong reference to this object.

<a id="return-value"></a>

## Return Value

An initialized overlay renderer object.

<a id="Discussion"></a>

## Discussion

Initially, the overlay renderer assumes that the overlay is fully opaque and that it has a content scale factor of 1.0. You can change these values as needed using the [alpha](alpha.md) and [contentScaleFactor](contentscalefactor.md) properties.
