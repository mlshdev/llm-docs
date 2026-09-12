> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar/thickness](https://developer.apple.com/documentation/appkit/nsstatusbar/thickness)

# thickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the status bar, in pixels.

## Declaration

```swift
var thickness: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `20.0`. The status bar returned by the [system](system.md) has a thickness of 22 pixels, which corresponds to the thickness of the menu bar.

## See Also

### Getting Status-Bar Attributes

- [isVertical](isvertical.md): A Boolean value indicating whether the status bar has a vertical orientation.

# thickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the status bar, in pixels.

## Declaration

```objectivec
@property (readonly) CGFloat thickness;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `20.0`. The status bar returned by the [systemStatusBar](system.md) has a thickness of 22 pixels, which corresponds to the thickness of the menu bar.

## See Also

### Getting Status-Bar Attributes

- [vertical](isvertical.md): A Boolean value indicating whether the status bar has a vertical orientation.
