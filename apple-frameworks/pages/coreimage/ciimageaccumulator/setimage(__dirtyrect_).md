> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageaccumulator/setimage(_:dirtyrect:)](https://developer.apple.com/documentation/coreimage/ciimageaccumulator/setimage(_:dirtyrect:))

# setImage(\_:dirtyRect:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Updates an image accumulator with a subregion of an image object.

## Declaration

```swift
func setImage(_ image: CIImage, dirtyRect: CGRect)
```

## Parameters

- `image`: The image object whose contents you want to assign to the image accumulator.
- `dirtyRect`: A rectangle that defines the subregion of the image object that’s changed since the last time you updated the image accumulator. You must guarantee that the new contents differ from the old only within the region specified by the this argument.

<a id="Discussion"></a>

## Discussion

For additional details on using this method, see “Imaging Dynamical Systems” in [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## See Also

### Setting an Image

- [setImage(\_:)](setimage%28__%29.md): Sets the contents of the image accumulator to the contents of the specified image object.

# setImage:dirtyRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Updates an image accumulator with a subregion of an image object.

## Declaration

```objectivec
- (void) setImage:(CIImage *) image dirtyRect:(CGRect) dirtyRect;
```

## Parameters

- `image`: The image object whose contents you want to assign to the image accumulator.
- `dirtyRect`: A rectangle that defines the subregion of the image object that’s changed since the last time you updated the image accumulator. You must guarantee that the new contents differ from the old only within the region specified by the this argument.

<a id="Discussion"></a>

## Discussion

For additional details on using this method, see “Imaging Dynamical Systems” in [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## See Also

### Setting an Image

- [setImage:](setimage%28__%29.md): Sets the contents of the image accumulator to the contents of the specified image object.
