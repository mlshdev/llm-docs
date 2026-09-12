> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorspaceretain](https://developer.apple.com/documentation/coregraphics/cgcolorspaceretain)

# CGColorSpaceRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a color space.

## Declaration

```objectivec
extern CGColorSpaceRefCGColorSpaceRetain(CGColorSpaceRef space);
```

## Parameters

- `space`: The Quartz color space to retain.

<a id="return-value"></a>

## Return Value

The same color space you passed in as the `space` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `cs` parameter is `NULL`.

## See Also

### Retaining and Releasing Color Spaces

- [CGColorSpaceRelease](cgcolorspacerelease.md): Decrements the retain count of a color space.
