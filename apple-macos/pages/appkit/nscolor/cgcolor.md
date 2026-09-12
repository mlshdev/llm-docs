> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/cgcolor](https://developer.apple.com/documentation/appkit/nscolor/cgcolor)

# cgColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The Core Graphics color object corresponding to the color.

## Declaration

```swift
var cgColor: CGColor { get }
```

<a id="Discussion"></a>

## Discussion

This property always contains a valid color, even though the value may be an approximation in some cases. There is no guaranteed round-trip color fidelity.

# CGColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The Core Graphics color object corresponding to the color.

## Declaration

```objectivec
@property (readonly) CGColorRef CGColor;
```

<a id="Discussion"></a>

## Discussion

This property always contains a valid color, even though the value may be an approximation in some cases. There is no guaranteed round-trip color fidelity.
