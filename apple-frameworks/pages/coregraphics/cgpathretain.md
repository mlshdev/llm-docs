> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathretain](https://developer.apple.com/documentation/coregraphics/cgpathretain)

# CGPathRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a graphics path.

## Declaration

```objectivec
extern CGPathRefCGPathRetain(CGPathRef path);
```

## Parameters

- `path`: The graphics path to retain.

<a id="return-value"></a>

## Return Value

The same path you passed in as the `path` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `path` parameter is `NULL`.

## See Also

### Retaining and Releasing a Path

- [CGPathRelease](cgpathrelease.md): Decrements the retain count of a graphics path.
