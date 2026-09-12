> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageaccumulator/extent](https://developer.apple.com/documentation/coreimage/ciimageaccumulator/extent)

# extent (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The extent of the image associated with the image accumulator.

## Declaration

```swift
var extent: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

Extent is a rectangle that specifies the size of the image associated with the image accumulator. This rectangle is the size of the complete region of the working coordinate space, and is a fixed area. It specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.

## See Also

### Obtaining Data From an Image Accumulator

- [format](format.md): The pixel format of the image accumulator.
- [image()](image%28%29.md): Returns the current contents of the image accumulator.

# extent (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The extent of the image associated with the image accumulator.

## Declaration

```objectivec
@property (readonly) CGRect extent;
```

<a id="Discussion"></a>

## Discussion

Extent is a rectangle that specifies the size of the image associated with the image accumulator. This rectangle is the size of the complete region of the working coordinate space, and is a fixed area. It specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.

## See Also

### Obtaining Data From an Image Accumulator

- [format](format.md): The pixel format of the image accumulator.
- [image](image%28%29.md): Returns the current contents of the image accumulator.
