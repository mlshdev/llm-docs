> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationcontext/allowsimplicitanimation](https://developer.apple.com/documentation/appkit/nsanimationcontext/allowsimplicitanimation)

# allowsImplicitAnimation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Determine if animations are enabled or not for animations that occur as a result of another property change.

## Declaration

```swift
var allowsImplicitAnimation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Using the [animator()](../nsanimatablepropertycontainer/animator%28%29.md) proxy will automatically set `allowsImplicitAnimation` to [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), other properties can implicitly animate along with the initially changed property.

For instance, calling `[[view animator] setFrame:frame]` will allow subviews to also animate their frame positions. When the value is [false](https://developer.apple.com/documentation/swift/false) the behavior is diabled.

The default value is [false](https://developer.apple.com/documentation/swift/false).

This is only applicable when layer backed on OS v10.8 and later.

# allowsImplicitAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

Determine if animations are enabled or not for animations that occur as a result of another property change.

## Declaration

```objectivec
@property BOOL allowsImplicitAnimation;
```

<a id="Discussion"></a>

## Discussion

Using the [animator](../nsanimatablepropertycontainer/animator%28%29.md) proxy will automatically set `allowsImplicitAnimation` to [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), other properties can implicitly animate along with the initially changed property.

For instance, calling `[[view animator] setFrame:frame]` will allow subviews to also animate their frame positions. When the value is [false](https://developer.apple.com/documentation/swift/false) the behavior is diabled.

The default value is [false](https://developer.apple.com/documentation/swift/false).

This is only applicable when layer backed on OS v10.8 and later.
