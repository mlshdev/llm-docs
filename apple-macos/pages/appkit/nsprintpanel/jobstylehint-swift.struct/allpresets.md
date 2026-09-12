> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/jobstylehint-swift.struct/allpresets](https://developer.apple.com/documentation/appkit/nsprintpanel/jobstylehint-swift.struct/allpresets)

# allPresets (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Output appropriate to all graphics types.

## Declaration

```swift
static let allPresets: NSPrintPanel.JobStyleHint
```

<a id="Discussion"></a>

## Discussion

Equivalent to Core Printing’s `kPMPresetGraphicsTypeAll`.

## See Also

### Constants

- [photo](photo.md): Output contains photographic data.
- [noPresets](nopresets.md): Output excludes all graphics printing.

# NSPrintAllPresetsJobStyleHint (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Output appropriate to all graphics types.

## Declaration

```objectivec
extern NSPrintPanelJobStyleHint const NSPrintAllPresetsJobStyleHint;
```

<a id="Discussion"></a>

## Discussion

Equivalent to Core Printing’s `kPMPresetGraphicsTypeAll`.

## See Also

### Constants

- [NSPrintPhotoJobStyleHint](photo.md): Output contains photographic data.
- [NSPrintNoPresetsJobStyleHint](nopresets.md): Output excludes all graphics printing.
