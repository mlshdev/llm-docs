> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsphere/isgeodesic](https://developer.apple.com/documentation/scenekit/scnsphere/isgeodesic)

# isGeodesic (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value specifying whether SceneKit uses a geodesic polygon mesh to render the sphere.

## Declaration

```swift
var isGeodesic: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit constructs a sphere mesh using a rectangular grid, like the lines of latitude and longitude on a globe of the Earth. This type of sphere mesh is efficient for most uses, but can cause texture distortion in the areas near its poles.

A value of [true](https://developer.apple.com/documentation/swift/true) specifies that SceneKit constructs a sphere mesh by successively subdividing an icosahedron, creating a grid of uniformly sized triangles across the entire surface of the sphere, as shown below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929813@2x.png)

## See Also

### Adjusting Geometric Detail

- [segmentCount](segmentcount.md): A number determining the detail of the polygon mesh SceneKit uses to render the sphere. Animatable.

# geodesic (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value specifying whether SceneKit uses a geodesic polygon mesh to render the sphere.

## Declaration

```objectivec
@property (nonatomic, getter=isGeodesic) BOOL geodesic;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit constructs a sphere mesh using a rectangular grid, like the lines of latitude and longitude on a globe of the Earth. This type of sphere mesh is efficient for most uses, but can cause texture distortion in the areas near its poles.

A value of [true](https://developer.apple.com/documentation/swift/true) specifies that SceneKit constructs a sphere mesh by successively subdividing an icosahedron, creating a grid of uniformly sized triangles across the entire surface of the sphere, as shown below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929813@2x.png)

## See Also

### Adjusting Geometric Detail

- [segmentCount](segmentcount.md): A number determining the detail of the polygon mesh SceneKit uses to render the sphere. Animatable.
