> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator/effectsviewinserter](https://developer.apple.com/documentation/appkit/nstextinsertionindicator/effectsviewinserter)

# effectsViewInserter (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An optional closure the system calls during dictation.

## Declaration

```swift
var effectsViewInserter: ((NSView) -> Void)? { get set }
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to add the view that displays the trailing glow to the view hierarchy. The system calls the closure when it needs to display the glow effect view.

During dictation the indicator displays a glow effect above the text view and below the insertion indicator. It’s the closure’s responsibility to add the glow effect view to the view hierarchy.

## See Also

### Configuring indicators

- [color](color.md): The color of this indicator.

# effectsViewInserter (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An optional closure the system calls during dictation.

## Declaration

```objectivec
@property (copy, nullable) void (^effectsViewInserter)(NSView *view);
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Use this property to add the view that displays the trailing glow to the view hierarchy. The system calls the closure when it needs to display the glow effect view.

During dictation the indicator displays a glow effect above the text view and below the insertion indicator. It’s the closure’s responsibility to add the glow effect view to the view hierarchy.

## See Also

### Configuring indicators

- [color](color.md): The color of this indicator.
