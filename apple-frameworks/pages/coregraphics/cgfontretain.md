> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfontretain](https://developer.apple.com/documentation/coregraphics/cgfontretain)

# CGFontRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a font.

## Declaration

```objectivec
extern CGFontRefCGFontRetain(CGFontRef font);
```

## Parameters

- `font`: The font to retain.

<a id="return-value"></a>

## Return Value

The same font you specified in the `font` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `font` parameter is `NULL`.

## See Also

### Retaining and Releasing a CGFont Object

- [CGFontRelease](cgfontrelease.md): Decrements the retain count of a font.
