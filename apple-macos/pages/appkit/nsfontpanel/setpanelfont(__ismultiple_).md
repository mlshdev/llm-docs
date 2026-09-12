> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel/setpanelfont(_:ismultiple:)](https://developer.apple.com/documentation/appkit/nsfontpanel/setpanelfont(_:ismultiple:))

# setPanelFont(\_:isMultiple:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selected font in the receiver to the specified font.

## Declaration

```swift
func setPanelFont(_ fontObj: NSFont, isMultiple flag: Bool)
```

## Parameters

- `fontObj`: The font to be selected.
- `flag`: If [false](https://developer.apple.com/documentation/swift/false), selects the specified font; otherwise selects no font and displays a message in the preview area indicating that multiple fonts are selected.

<a id="Discussion"></a>

## Discussion

You normally don’t use this method directly; instead, you send [setSelectedFont(\_:isMultiple:)](../nsfontmanager/setselectedfont%28__ismultiple_%29.md) to the shared `NSFontManager`, which in turn invokes this method.

# setPanelFont:isMultiple: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the selected font in the receiver to the specified font.

## Declaration

```objectivec
- (void) setPanelFont:(NSFont *) fontObj isMultiple:(BOOL) flag;
```

## Parameters

- `fontObj`: The font to be selected.
- `flag`: If [false](https://developer.apple.com/documentation/swift/false), selects the specified font; otherwise selects no font and displays a message in the preview area indicating that multiple fonts are selected.

<a id="Discussion"></a>

## Discussion

You normally don’t use this method directly; instead, you send [setSelectedFont:isMultiple:](../nsfontmanager/setselectedfont%28__ismultiple_%29.md) to the shared `NSFontManager`, which in turn invokes this method.
