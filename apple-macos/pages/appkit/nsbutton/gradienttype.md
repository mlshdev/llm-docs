> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/gradienttype](https://developer.apple.com/documentation/appkit/nsbutton/gradienttype)

# NSButton.GradientType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.

## Declaration

```swift
enum GradientType
```

## Topics

### Constants

- [NSButton.GradientType.none](gradienttype/none.md): Deprecated. There is no gradient, so the button looks flat.
- [NSButton.GradientType.concaveWeak](gradienttype/concaveweak.md): Deprecated. The top-left corner is light gray, and the bottom-right corner is dark gray, so the button appears to be pushed in.
- [NSButton.GradientType.concaveStrong](gradienttype/concavestrong.md): Deprecated. As with `NSGradientConcaveWeak`, the top-left corner is light gray, and the bottom-right corner is dark gray, but the difference between the grays is greater, so the appearance of being pushed in is stronger.
- [NSButton.GradientType.convexWeak](gradienttype/convexweak.md): Deprecated. The top-left corner is dark gray, and the bottom-right corner is light gray, so the button appears to be sticking out.
- [NSButton.GradientType.convexStrong](gradienttype/convexstrong.md): Deprecated. As with `NSGradientConvexWeak`, the top-left corner is dark gray, and the bottom-right corner is light gray, but the difference between the grays is greater, so the appearance of sticking out is stronger.

### Initializers

- [init(rawValue:)](gradienttype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSButton.BezelStyle](bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSButton.ButtonType](buttontype.md): Button types that you can specify using [setButtonType(\_:)](../nsbuttoncell/setbuttontype%28__%29.md).

# NSGradientType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.

## Declaration

```objectivec
enum NSGradientType : NSUInteger;
```

## Topics

### Constants

- [NSGradientNone](gradienttype/none.md): Deprecated. There is no gradient, so the button looks flat.
- [NSGradientConcaveWeak](gradienttype/concaveweak.md): Deprecated. The top-left corner is light gray, and the bottom-right corner is dark gray, so the button appears to be pushed in.
- [NSGradientConcaveStrong](gradienttype/concavestrong.md): Deprecated. As with `NSGradientConcaveWeak`, the top-left corner is light gray, and the bottom-right corner is dark gray, but the difference between the grays is greater, so the appearance of being pushed in is stronger.
- [NSGradientConvexWeak](gradienttype/convexweak.md): Deprecated. The top-left corner is dark gray, and the bottom-right corner is light gray, so the button appears to be sticking out.
- [NSGradientConvexStrong](gradienttype/convexstrong.md): Deprecated. As with `NSGradientConvexWeak`, the top-left corner is dark gray, and the bottom-right corner is light gray, but the difference between the grays is greater, so the appearance of sticking out is stronger.

## See Also

### Constants

- [NSBezelStyle](bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSButtonType](buttontype.md): Button types that you can specify using [setButtonType:](../nsbuttoncell/setbuttontype%28__%29.md).
