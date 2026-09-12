> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/interiorbackgroundstyle](https://developer.apple.com/documentation/appkit/nstablerowview/interiorbackgroundstyle)

# interiorBackgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies how the subviews should draw.

## Declaration

```swift
var interiorBackgroundStyle: NSView.BackgroundStyle { get }
```

<a id="Discussion"></a>

## Discussion

This value is dynamically computed based on the set of properties set for the `NSTableRowView`.

Subclassers can override this value when they draw differently based on the currently displayed properties.

This property can also be set to determine the color a subview should use. See [NSView.BackgroundStyle](../nsview/backgroundstyle.md) for supported values.

## See Also

### Display Style

- [isEmphasized](isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [isFloating](isfloating.md): Specifies whether the row is drawn using the floating style.

# interiorBackgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies how the subviews should draw.

## Declaration

```objectivec
@property (readonly) NSBackgroundStyle interiorBackgroundStyle;
```

<a id="Discussion"></a>

## Discussion

This value is dynamically computed based on the set of properties set for the `NSTableRowView`.

Subclassers can override this value when they draw differently based on the currently displayed properties.

This property can also be set to determine the color a subview should use. See [NSBackgroundStyle](../nsview/backgroundstyle.md) for supported values.

## See Also

### Display Style

- [emphasized](isemphasized.md): Determines whether the row will draw with the alternate or secondary color (unless overridden).
- [floating](isfloating.md): Specifies whether the row is drawn using the floating style.
