> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatternrelease](https://developer.apple.com/documentation/coregraphics/cgpatternrelease)

# CGPatternRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a Core Graphics pattern.

## Declaration

```objectivec
extern void CGPatternRelease(CGPatternRef pattern);
```

## Parameters

- `pattern`: The pattern to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `pattern` parameteris `NULL`.

## See Also

### Retaining and Releasing a Pattern

- [CGPatternRetain](cgpatternretain.md): Increments the retain count of a Core Graphics pattern.
