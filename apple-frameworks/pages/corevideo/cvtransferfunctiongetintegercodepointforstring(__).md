> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtransferfunctiongetintegercodepointforstring(_:)](https://developer.apple.com/documentation/corevideo/cvtransferfunctiongetintegercodepointforstring(_:))

# CVTransferFunctionGetIntegerCodePointForString(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.

## Declaration

```swift
func CVTransferFunctionGetIntegerCodePointForString(_ transferFunctionString: CFString?) -> Int32
```

## Parameters

- `transferFunctionString`: A Core Video transfer function string. See [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The code point corresponding to the transfer function string, or `2` (unknown) if the string is [nil](../objectivec/nil-227m0.md) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString(\_:)](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint(\_:)](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint(\_:)](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString(\_:)](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint(\_:)](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.

# CVTransferFunctionGetIntegerCodePointForString (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.

## Declaration

```objectivec
extern int CVTransferFunctionGetIntegerCodePointForString(CFStringRef transferFunctionString);
```

## Parameters

- `transferFunctionString`: A Core Video transfer function string. See [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md) for possible values.

<a id="return-value"></a>

## Return Value

The code point corresponding to the transfer function string, or `2` (unknown) if the string is [nil](../objectivec/nil-227m0.md) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.
