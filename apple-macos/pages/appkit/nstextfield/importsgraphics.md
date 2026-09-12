> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/importsgraphics](https://developer.apple.com/documentation/appkit/nstextfield/importsgraphics)

# importsGraphics (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the user can drag image files into the text field.

## Declaration

```swift
var importsGraphics: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field accepts dragged images; if [false](https://developer.apple.com/documentation/swift/false), it doesn’t. You can add images programmatically regardless of this setting.

## See Also

### Controlling rich text behavior

- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that controls whether the user can change font attributes of the text field’s string.

# importsGraphics (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the user can drag image files into the text field.

## Declaration

```objectivec
@property BOOL importsGraphics;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the text field accepts dragged images; if [false](https://developer.apple.com/documentation/swift/false), it doesn’t. You can add images programmatically regardless of this setting.

## See Also

### Controlling rich text behavior

- [allowsEditingTextAttributes](allowseditingtextattributes.md): A Boolean value that controls whether the user can change font attributes of the text field’s string.
