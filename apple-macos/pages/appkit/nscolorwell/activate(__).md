> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/activate(_:)](https://developer.apple.com/documentation/appkit/nscolorwell/activate(_:))

# activate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Activates the color well, displays the color panel, and synchronizes the two UI elements.

## Declaration

```swift
func activate(_ exclusive: Bool)
```

## Parameters

- `exclusive`: [true](https://developer.apple.com/documentation/swift/true) to deactivate any other color wells; [false](https://developer.apple.com/documentation/swift/false) to keep them active. If a color panel is active with `exclusive` set to [true](https://developer.apple.com/documentation/swift/true) and another is subsequently activated with `exclusive` set to [false](https://developer.apple.com/documentation/swift/false), the exclusive setting of the first panel is ignored.

<a id="Discussion"></a>

## Discussion

When you call this method, the color well displays the standard color panel and sets the panel’s current color to the value in the color well. When someone changes the color in the color panel, the color well updates its selected color to match. If the color well’s [isBordered](isbordered.md) property is [true](https://developer.apple.com/documentation/swift/true), the color well highlights that border while it’s active.

## See Also

### Activating and deactivating color wells

- [isActive](isactive.md): A Boolean value that indicates whether the color well is currently active.
- [deactivate()](deactivate%28%29.md): Deactivates the color well.

# activate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Activates the color well, displays the color panel, and synchronizes the two UI elements.

## Declaration

```objectivec
- (void) activate:(BOOL) exclusive;
```

## Parameters

- `exclusive`: [true](https://developer.apple.com/documentation/swift/true) to deactivate any other color wells; [false](https://developer.apple.com/documentation/swift/false) to keep them active. If a color panel is active with `exclusive` set to [true](https://developer.apple.com/documentation/swift/true) and another is subsequently activated with `exclusive` set to [false](https://developer.apple.com/documentation/swift/false), the exclusive setting of the first panel is ignored.

<a id="Discussion"></a>

## Discussion

When you call this method, the color well displays the standard color panel and sets the panel’s current color to the value in the color well. When someone changes the color in the color panel, the color well updates its selected color to match. If the color well’s [bordered](isbordered.md) property is [true](https://developer.apple.com/documentation/swift/true), the color well highlights that border while it’s active.

## See Also

### Activating and deactivating color wells

- [active](isactive.md): A Boolean value that indicates whether the color well is currently active.
- [deactivate](deactivate%28%29.md): Deactivates the color well.
