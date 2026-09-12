> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/scenewithsize:](https://developer.apple.com/documentation/spritekit/skscene/scenewithsize:)

# sceneWithSize:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates and returns a new scene object.

## Declaration

```objectivec
+ (instancetype) sceneWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the scene in points.

<a id="return-value"></a>

## Return Value

A new scene object.

<a id="Discussion"></a>

## Discussion

This class method allocates a new scene object and calls its [initWithSize:](init%28size_%29.md) initializer method.

## See Also

### Creating a Scene Programmatically

- [initWithSize:](init%28size_%29.md): Initializes a new scene object.
- [size](size.md): The dimensions of the scene, in points.
