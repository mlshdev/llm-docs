> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/jobstylehint-swift.struct](https://developer.apple.com/documentation/appkit/nsprintpanel/jobstylehint-swift.struct)

# NSPrintPanel.JobStyleHint (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.

## Declaration

```swift
struct JobStyleHint
```

## Topics

### Constants

- [photo](jobstylehint-swift.struct/photo.md): Output contains photographic data.
- [allPresets](jobstylehint-swift.struct/allpresets.md): Output appropriate to all graphics types.
- [noPresets](jobstylehint-swift.struct/nopresets.md): Output excludes all graphics printing.

### Initializers

- [init(rawValue:)](jobstylehint-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanel.Options](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.

# NSPrintPanelJobStyleHint (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.

## Declaration

```objectivec
typedef NSString * NSPrintPanelJobStyleHint;
```

## Topics

### Constants

- [NSPrintPhotoJobStyleHint](jobstylehint-swift.struct/photo.md): Output contains photographic data.
- [NSPrintAllPresetsJobStyleHint](jobstylehint-swift.struct/allpresets.md): Output appropriate to all graphics types.
- [NSPrintNoPresetsJobStyleHint](jobstylehint-swift.struct/nopresets.md): Output excludes all graphics printing.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [NSPrintPanelOptions](options-swift.struct.md): Constants that specify options for configuring the contents of the main Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.
