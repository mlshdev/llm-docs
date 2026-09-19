> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstext/drawsbackground

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver draws its background.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver fills its background with the background color, if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

## See Also

### Setting graphics attributes

- [backgroundColor](backgroundcolor.md): The receiver’s background color to a given color.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that controls whether the receiver draws its background.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true), the receiver fills its background with the background color, if `flag` is [false](https://developer.apple.com/documentation/swift/false), it doesn’t.

## See Also

### Setting graphics attributes

- [backgroundColor](backgroundcolor.md): The receiver’s background color to a given color.
