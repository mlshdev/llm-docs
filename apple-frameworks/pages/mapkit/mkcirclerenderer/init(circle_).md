> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcirclerenderer/init(circle:)](https://developer.apple.com/documentation/mapkit/mkcirclerenderer/init(circle:))

# init(circle:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new overlay view using the specified circle overlay object.

## Declaration

```swift
init(circle: MKCircle)
```

## Parameters

- `circle`: The circle overlay containing the information about the circular area for the renderer to draw. The renderer maintains a strong reference to the object you provide. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized circle renderer object.

# initWithCircle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates a new overlay view using the specified circle overlay object.

## Declaration

```objectivec
- (instancetype) initWithCircle:(MKCircle *) circle;
```

## Parameters

- `circle`: The circle overlay containing the information about the circular area for the renderer to draw. The renderer maintains a strong reference to the object you provide. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized circle renderer object.
