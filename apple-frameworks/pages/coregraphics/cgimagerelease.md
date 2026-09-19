> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgimagerelease

# CGImageRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a bitmap image.

## Declaration

```objectivec
extern void CGImageRelease(CGImageRef image);
```

## Parameters

- `image`: The image to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `image` parameter is `NULL`.

## See Also

### Retaining and releasing images

- [CGImageRetain](cgimageretain.md): Increments the retain count of a bitmap image.
