> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgimageretain

# CGImageRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a bitmap image.

## Declaration

```objectivec
extern CGImageRefCGImageRetain(CGImageRef image);
```

## Parameters

- `image`: The image to retain.

<a id="return-value"></a>

## Return Value

The same image you passed in as the `image` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `image` parameter is `NULL`.

## See Also

### Retaining and releasing images

- [CGImageRelease](cgimagerelease.md): Decrements the retain count of a bitmap image.
