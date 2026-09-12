> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextalignment/center](https://developer.apple.com/documentation/uikit/nstextalignment/center)

# NSTextAlignment.center (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Text is center-aligned.

## Declaration

```swift
case center
```

<a id="Discussion"></a>

## Discussion

The value of this enumeration case is `1` for binaries built for the `arm64` architecture, and running in iOS, macOS, or Simulator. The value is also `1` for binaries built for the `x86_64` architecture and running in Simulator for iOS. However, the value of this enumeration case is `2` for other binaries built for the `x86_64` architecture, including apps translated using Rosetta. If you persist this value manually, make sure to convert it for the appropriate environment when you read it.

For more information about Rosetta, see [About the Rosetta translation environment](../../apple-silicon/about-the-rosetta-translation-environment.md).

## See Also

### Constants

- [NSTextAlignment.left](left.md): Text is left-aligned.
- [NSTextAlignment.right](right.md): Text is right-aligned.
- [NSTextAlignment.justified](justified.md): Text is justified.
- [NSTextAlignment.natural](natural.md): Text uses the default alignment for the current localization of the app.

# NSTextAlignmentCenter (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Text is center-aligned.

## Declaration

```objectivec
NSTextAlignmentCenter
```

<a id="Discussion"></a>

## Discussion

The value of this enumeration case is `1` for binaries built for the `arm64` architecture, and running in iOS, macOS, or Simulator. The value is also `1` for binaries built for the `x86_64` architecture and running in Simulator for iOS. However, the value of this enumeration case is `2` for other binaries built for the `x86_64` architecture, including apps translated using Rosetta. If you persist this value manually, make sure to convert it for the appropriate environment when you read it.

For more information about Rosetta, see [About the Rosetta translation environment](../../apple-silicon/about-the-rosetta-translation-environment.md).

## See Also

### Constants

- [NSTextAlignmentLeft](left.md): Text is left-aligned.
- [NSTextAlignmentRight](right.md): Text is right-aligned.
- [NSTextAlignmentJustified](justified.md): Text is justified.
- [NSTextAlignmentNatural](natural.md): Text uses the default alignment for the current localization of the app.
