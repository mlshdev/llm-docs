> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/imagewithcolor:](https://developer.apple.com/documentation/coreimage/ciimage/imagewithcolor:)

# imageWithColor:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Creates and returns an image of infinite extent whose entire content is the specified color.

## Declaration

```objectivec
+ (CIImage *) imageWithColor:(CIColor *) color;
```

## Parameters

- `color`: A color object.

<a id="return-value"></a>

## Return Value

The image object initialized with the color represented by the [CIColor](../cicolor.md) object.

## See Also

### Creating Solid Colors

- [initWithColor:](init%28color_%29.md): Initializes an image of infinite extent whose entire content is the specified color.
- [blackImage](black.md)
- [blueImage](blue.md)
- [clearImage](clear.md)
- [cyanImage](cyan.md)
- [grayImage](gray.md)
- [greenImage](green.md)
- [magentaImage](magenta.md)
- [redImage](red.md)
- [whiteImage](white.md)
- [yellowImage](yellow.md)
