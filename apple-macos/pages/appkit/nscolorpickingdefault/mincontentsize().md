> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/mincontentsize()](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/mincontentsize())

# minContentSize() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Indicates the receiver’s minimum content size.

## Declaration

```swift
@MainActor func minContentSize() -> NSSize
```

<a id="Discussion"></a>

## Discussion

The receiver does not allow a size smaller than `minContentSize`.

## See Also

### Configuring Color Pickers

- [setMode(\_:)](setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage(\_:in:)](insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [provideNewButtonImage()](providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [buttonToolTip()](buttontooltip%28%29.md): Provides the toolbar button help tag.

# minContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Indicates the receiver’s minimum content size.

## Declaration

```objectivec
- (NSSize) minContentSize;
```

<a id="Discussion"></a>

## Discussion

The receiver does not allow a size smaller than `minContentSize`.

## See Also

### Configuring Color Pickers

- [setMode:](setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage:in:](insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [provideNewButtonImage](providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [buttonToolTip](buttontooltip%28%29.md): Provides the toolbar button help tag.
