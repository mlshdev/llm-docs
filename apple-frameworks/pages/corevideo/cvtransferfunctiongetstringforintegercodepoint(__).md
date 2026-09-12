> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtransferfunctiongetstringforintegercodepoint(_:)](https://developer.apple.com/documentation/corevideo/cvtransferfunctiongetstringforintegercodepoint(_:))

# CVTransferFunctionGetStringForIntegerCodePoint(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.

## Declaration

```swift
func CVTransferFunctionGetStringForIntegerCodePoint(_ transferFunctionCodePoint: Int32) -> Unmanaged<CFString>?
```

## Parameters

- `transferFunctionCodePoint`: The standard integer code point.

<a id="return-value"></a>

## Return Value

The transfer function string corresponding to the code point (See [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md) for possible values.), or [nil](../objectivec/nil-227m0.md) if the code point is `2` (unknown) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString(\_:)](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint(\_:)](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString(\_:)](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString(\_:)](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint(\_:)](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.

# CVTransferFunctionGetStringForIntegerCodePoint (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.

## Declaration

```objectivec
extern CFStringRefCVTransferFunctionGetStringForIntegerCodePoint(int transferFunctionCodePoint);
```

## Parameters

- `transferFunctionCodePoint`: The standard integer code point.

<a id="return-value"></a>

## Return Value

The transfer function string corresponding to the code point (See [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md) for possible values.), or [nil](../objectivec/nil-227m0.md) if the code point is `2` (unknown) or the system doesn’t recognize it.

## See Also

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.
