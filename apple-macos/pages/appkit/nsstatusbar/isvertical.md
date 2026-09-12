> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar/isvertical](https://developer.apple.com/documentation/appkit/nsstatusbar/isvertical)

# isVertical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the status bar has a vertical orientation.

## Declaration

```swift
var isVertical: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the status bar has a vertical orientation. The status bar returned by the [system](system.md) method is horizontal and has the value [false](https://developer.apple.com/documentation/swift/false) for this property.

## See Also

### Getting Status-Bar Attributes

- [thickness](thickness.md): The thickness of the status bar, in pixels.

# vertical (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the status bar has a vertical orientation.

## Declaration

```objectivec
@property (readonly, getter=isVertical) BOOL vertical;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the status bar has a vertical orientation. The status bar returned by the [systemStatusBar](system.md) method is horizontal and has the value [false](https://developer.apple.com/documentation/swift/false) for this property.

## See Also

### Getting Status-Bar Attributes

- [thickness](thickness.md): The thickness of the status bar, in pixels.
