> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradientretain](https://developer.apple.com/documentation/coregraphics/cggradientretain)

# CGGradientRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a CGGradient object.

## Declaration

```objectivec
extern CGGradientRefCGGradientRetain(CGGradientRef gradient);
```

## Parameters

- `gradient`: The gradient object to retain.

<a id="return-value"></a>

## Return Value

The same gradient object that you passed in as the `gradient` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `gradient` parameter is `NULL`.

## See Also

### Retaining and Releasing a Gradient

- [CGGradientRelease](cggradientrelease.md): Decrements the retain count of a CGGradient object.
