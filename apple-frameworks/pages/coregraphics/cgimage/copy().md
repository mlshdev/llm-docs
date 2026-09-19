> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgimage/copy()

# copy() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a bitmap image.

## Declaration

```swift
func copy() -> CGImage?
```

<a id="return-value"></a>

## Return Value

An copy of the image.

## See Also

### Copying an image

- [copy(colorSpace:)](copy%28colorspace_%29.md): Creates a copy of a bitmap image, replacing its colorspace.

# CGImageCreateCopy (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a bitmap image.

## Declaration

```objectivec
extern CGImageRefCGImageCreateCopy(CGImageRef image);
```

## Parameters

- `image`: The image to copy.

<a id="return-value"></a>

## Return Value

An copy of the image.

## See Also

### Copying an image

- [CGImageCreateCopyWithColorSpace](copy%28colorspace_%29.md): Creates a copy of a bitmap image, replacing its colorspace.
