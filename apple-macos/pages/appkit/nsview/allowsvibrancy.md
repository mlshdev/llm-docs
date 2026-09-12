> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/allowsvibrancy](https://developer.apple.com/documentation/appkit/nsview/allowsvibrancy)

# allowsVibrancy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the view ensures it is vibrant on top of other content.

## Declaration

```swift
var allowsVibrancy: Bool { get }
```

<a id="Discussion"></a>

## Discussion

AppKit checks this property when the view is incorporated into a view hierarchy that uses vibrancy. If the property is [true](https://developer.apple.com/documentation/swift/true), the view takes appropriate measures to ensure its content is vibrant on top of any underlying material. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). However, some of AppKit’s view subclasses change the value of this property based on the artwork they draw.

# allowsVibrancy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the view ensures it is vibrant on top of other content.

## Declaration

```objectivec
@property (readonly) BOOL allowsVibrancy;
```

<a id="Discussion"></a>

## Discussion

AppKit checks this property when the view is incorporated into a view hierarchy that uses vibrancy. If the property is [true](https://developer.apple.com/documentation/swift/true), the view takes appropriate measures to ensure its content is vibrant on top of any underlying material. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). However, some of AppKit’s view subclasses change the value of this property based on the artwork they draw.
