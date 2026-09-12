> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodenxcolor](https://developer.apple.com/documentation/foundation/nscoder/decodenxcolor)

# decodeNXColor

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Decodes a color structure from NEXTSTEP Release 3 or earlier.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (NSColor *) decodeNXColor;
```

<a id="return-value"></a>

## Return Value

An autoreleased `NSColor` object. Returns `nil` if the archived color is invalid.

<a id="Discussion"></a>

## Discussion

This method does not have a matching method for encoding an `NXColor` structure. Encode an `NSColor` object instead.

`NXColor`, a type that dates from pre-OpenStep versions of NEXTSTEP, was a `struct`. Its replacement, `NSColor`, is a class. The difficulties of converting from a `struct` to a class require a special method like [decodeNXColor](decodenxcolor.md).

The [decodeNXColor](decodenxcolor.md) method becomes part of the `NSCoder` class only for apps that use AppKit.
