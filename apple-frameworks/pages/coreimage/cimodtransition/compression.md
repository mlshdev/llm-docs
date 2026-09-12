> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cimodtransition/compression](https://developer.apple.com/documentation/coreimage/cimodtransition/compression)

# compression (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of stretching applied to the mod hole pattern.

## Declaration

```swift
var compression: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Holes in the center aren’t distorted as much as those at the edge of the image.

## See Also

### Instance Properties

- [angle](angle.md): The angle of the mod hole pattern.
- [center](center.md): The x and y position to use as the center of the effect.
- [radius](radius.md): The radius of the undistorted mod holes in the pattern.

# compression (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of stretching applied to the mod hole pattern.

## Declaration

```objectivec
@property (nonatomic) float compression;
```

<a id="Discussion"></a>

## Discussion

Holes in the center aren’t distorted as much as those at the edge of the image.

## See Also

### Instance Properties

- [angle](angle.md): The angle of the mod hole pattern.
- [center](center.md): The x and y position to use as the center of the effect.
- [radius](radius.md): The radius of the undistorted mod holes in the pattern.
