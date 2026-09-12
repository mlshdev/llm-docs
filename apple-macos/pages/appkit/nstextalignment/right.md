> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalignment/right](https://developer.apple.com/documentation/appkit/nstextalignment/right)

# NSTextAlignment.right (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.0+

Text is right-aligned.

## Declaration

```swift
case right
```

<a id="Discussion"></a>

## Discussion

The value of this enumeration case is `2` for binaries built for the `arm64` architecture, and running in iOS, macOS, or Simulator. The value is also `2` for binaries built for the `x86_64` architecture and running in Simulator for iOS. However, the value of this enumeration case is `1` for other binaries built for the `x86_64` architecture, including apps translated using Rosetta. If you persist this value manually, make sure to convert it for the appropriate environment when you read it.

For more information about Rosetta, see [About the Rosetta translation environment](https://developer.apple.com/documentation/apple-silicon/about-the-rosetta-translation-environment).

## See Also

### Constants

- [NSTextAlignment.left](left.md): Text is left-aligned.
- [NSTextAlignment.center](center.md): Text is center-aligned.
- [NSTextAlignment.justified](justified.md): Text is justified.
- [NSTextAlignment.natural](natural.md): Text uses the default alignment for the current localization of the app.

# NSTextAlignmentRight (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Text is right-aligned.

## Declaration

```objectivec
NSTextAlignmentRight
```

<a id="Discussion"></a>

## Discussion

The value of this enumeration case is `2` for binaries built for the `arm64` architecture, and running in iOS, macOS, or Simulator. The value is also `2` for binaries built for the `x86_64` architecture and running in Simulator for iOS. However, the value of this enumeration case is `1` for other binaries built for the `x86_64` architecture, including apps translated using Rosetta. If you persist this value manually, make sure to convert it for the appropriate environment when you read it.

For more information about Rosetta, see [About the Rosetta translation environment](https://developer.apple.com/documentation/apple-silicon/about-the-rosetta-translation-environment).

## See Also

### Constants

- [NSTextAlignmentLeft](left.md): Text is left-aligned.
- [NSTextAlignmentCenter](center.md): Text is center-aligned.
- [NSTextAlignmentJustified](justified.md): Text is justified.
- [NSTextAlignmentNatural](natural.md): Text uses the default alignment for the current localization of the app.
