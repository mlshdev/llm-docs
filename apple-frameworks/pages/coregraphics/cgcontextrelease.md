> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextrelease](https://developer.apple.com/documentation/coregraphics/cgcontextrelease)

# CGContextRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a graphics context.

## Declaration

```objectivec
extern void CGContextRelease(CGContextRef c);
```

## Parameters

- `c`: The graphics context to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except it does not cause an error if `c` is `NULL`.

## See Also

### Retaining and Releasing Graphics Contexts

- [CGContextRetain](cgcontextretain.md): Increments the retain count of a graphics context.
