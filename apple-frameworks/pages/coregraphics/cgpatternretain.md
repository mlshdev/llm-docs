> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpatternretain](https://developer.apple.com/documentation/coregraphics/cgpatternretain)

# CGPatternRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a Core Graphics pattern.

## Declaration

```objectivec
extern CGPatternRefCGPatternRetain(CGPatternRef pattern);
```

## Parameters

- `pattern`: The pattern to retain.

<a id="return-value"></a>

## Return Value

The same pattern youpassed in as the `pattern` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md),except that it does not cause an error if the `pattern` parameteris `NULL`.

## See Also

### Retaining and Releasing a Pattern

- [CGPatternRelease](cgpatternrelease.md): Decrements the retain count of a Core Graphics pattern.
