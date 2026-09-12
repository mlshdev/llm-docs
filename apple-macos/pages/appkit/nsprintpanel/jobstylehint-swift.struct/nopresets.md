> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/jobstylehint-swift.struct/nopresets](https://developer.apple.com/documentation/appkit/nsprintpanel/jobstylehint-swift.struct/nopresets)

# noPresets (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

Output excludes all graphics printing.

## Declaration

```swift
static let noPresets: NSPrintPanel.JobStyleHint
```

<a id="Discussion"></a>

## Discussion

Equivalent to Core Printing’s `kPMPresetGraphicsTypeNone`.

## See Also

### Constants

- [photo](photo.md): Output contains photographic data.
- [allPresets](allpresets.md): Output appropriate to all graphics types.

# NSPrintNoPresetsJobStyleHint (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Output excludes all graphics printing.

## Declaration

```objectivec
extern NSPrintPanelJobStyleHint const NSPrintNoPresetsJobStyleHint;
```

<a id="Discussion"></a>

## Discussion

Equivalent to Core Printing’s `kPMPresetGraphicsTypeNone`.

## See Also

### Constants

- [NSPrintPhotoJobStyleHint](photo.md): Output contains photographic data.
- [NSPrintAllPresetsJobStyleHint](allpresets.md): Output appropriate to all graphics types.
