> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvcolorprimariesgetintegercodepointforstring(_:)](https://developer.apple.com/documentation/corevideo/cvcolorprimariesgetintegercodepointforstring(_:))

# CVColorPrimariesGetIntegerCodePointForString(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.

## Declaration

```swift
func CVColorPrimariesGetIntegerCodePointForString(_ colorPrimariesString: CFString?) -> Int32
```

## Parameters

- `colorPrimariesString`: A Core Video color primaries string. See [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The code point corresponding to the color primaries string, or `2` (unknown) if the string is [nil](../objectivec/nil-227m0.md) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetStringForIntegerCodePoint(\_:)](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString(\_:)](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint(\_:)](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString(\_:)](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint(\_:)](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.

# CVColorPrimariesGetIntegerCodePointForString (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.

## Declaration

```objectivec
extern int CVColorPrimariesGetIntegerCodePointForString(CFStringRef colorPrimariesString);
```

## Parameters

- `colorPrimariesString`: A Core Video color primaries string. See [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The code point corresponding to the color primaries string, or `2` (unknown) if the string is [nil](../objectivec/nil-227m0.md) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetStringForIntegerCodePoint](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.
