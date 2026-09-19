> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cimeshgenerator/mesh

# mesh (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array that describes the mesh to render.

## Declaration

```swift
var mesh: [Any] { get set }
```

<a id="Discussion"></a>

## Discussion

Specify the mesh as an array of line segments. Each line segment is stored as a [CIVector](../civector.md) instance that describes the line as a start point and an end point.

## See Also

### Instance Properties

- [color](color.md): The color of the rendered mesh.
- [width](width.md): The width of the effect.

# mesh (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array that describes the mesh to render.

## Declaration

```objectivec
@property (nonatomic, retain) NSArray * mesh;
```

<a id="Discussion"></a>

## Discussion

Specify the mesh as an array of line segments. Each line segment is stored as a [CIVector](../civector.md) instance that describes the line as a start point and an end point.

## See Also

### Instance Properties

- [color](color.md): The color of the rendered mesh.
- [width](width.md): The width of the effect.
