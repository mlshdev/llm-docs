> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/cursorposition](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/cursorposition)

# cursorPosition (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The current cursor location in the guest environment.

## Declaration

```swift
var cursorPosition: PGDisplayCoord_t { get }
```

<a id="Discussion"></a>

## Discussion

If the cursor isn’t on the display, this property’s value is `(0xFFFF, 0xFFFF)`.

# cursorPosition (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The current cursor location in the guest environment.

## Declaration

```objectivec
@property (nonatomic, readonly) PGDisplayCoord_t cursorPosition;
```

<a id="Discussion"></a>

## Discussion

If the cursor isn’t on the display, this property’s value is `(0xFFFF, 0xFFFF)`.
