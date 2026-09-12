> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextretain](https://developer.apple.com/documentation/coregraphics/cgcontextretain)

# CGContextRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a graphics context.

## Declaration

```objectivec
extern CGContextRefCGContextRetain(CGContextRef c);
```

## Parameters

- `c`: The graphics context to retain.

<a id="return-value"></a>

## Return Value

The same graphics context you passed in as the `context` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except it does not cause an error if `c` is `NULL`.

## See Also

### Retaining and Releasing Graphics Contexts

- [CGContextRelease](cgcontextrelease.md): Decrements the retain count of a graphics context.
