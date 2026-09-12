> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/options-swift.struct](https://developer.apple.com/documentation/appkit/nsprintpanel/options-swift.struct)

# NSPrintPanel.Options (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.5+

Constants that specify options for configuring the contents of the main Print panel.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [showsCopies](options-swift.struct/showscopies.md): The Print panel includes a field for manipulating the number of copies being printed.
- [showsPageRange](options-swift.struct/showspagerange.md): The Print panel includes a set of fields for manipulating the range of pages being printed.
- [showsPaperSize](options-swift.struct/showspapersize.md): The Print panel includes a control for manipulating the paper size of the printer.
- [showsOrientation](options-swift.struct/showsorientation.md): The Print panel includes a control for manipulating the page orientation.
- [showsScaling](options-swift.struct/showsscaling.md): The Print panel includes a control for scaling the printed output.
- [showsPrintSelection](options-swift.struct/showsprintselection.md): The Print panel includes an additional selection option for paper range.
- [showsPageSetupAccessory](options-swift.struct/showspagesetupaccessory.md): The Print panel includes a separate accessory view for manipulating the paper size, orientation, and scaling attributes.
- [showsPreview](options-swift.struct/showspreview.md): The Print panel displays a built-in preview of the document contents.

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanel.JobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [defaultButtonTitle()](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle(\_:)](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.

# NSPrintPanelOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify options for configuring the contents of the main Print panel.

## Declaration

```objectivec
enum NSPrintPanelOptions : NSUInteger;
```

## Topics

### Constants

- [NSPrintPanelShowsCopies](options-swift.struct/showscopies.md): The Print panel includes a field for manipulating the number of copies being printed.
- [NSPrintPanelShowsPageRange](options-swift.struct/showspagerange.md): The Print panel includes a set of fields for manipulating the range of pages being printed.
- [NSPrintPanelShowsPaperSize](options-swift.struct/showspapersize.md): The Print panel includes a control for manipulating the paper size of the printer.
- [NSPrintPanelShowsOrientation](options-swift.struct/showsorientation.md): The Print panel includes a control for manipulating the page orientation.
- [NSPrintPanelShowsScaling](options-swift.struct/showsscaling.md): The Print panel includes a control for scaling the printed output.
- [NSPrintPanelShowsPrintSelection](options-swift.struct/showsprintselection.md): The Print panel includes an additional selection option for paper range.
- [NSPrintPanelShowsPageSetupAccessory](options-swift.struct/showspagesetupaccessory.md): The Print panel includes a separate accessory view for manipulating the paper size, orientation, and scaling attributes.
- [NSPrintPanelShowsPreview](options-swift.struct/showspreview.md): The Print panel displays a built-in preview of the document contents.

## See Also

### Customizing the Panel

- [jobStyleHint](jobstylehint-swift.property.md): The type of settings that the print panel displays.
- [NSPrintPanelJobStyleHint](jobstylehint-swift.struct.md): Constants that specify job style hints for activating the simplified Print panel interface and setting the options to display.
- [options](options-swift.property.md): The current configuration options for the Print panel.
- [defaultButtonTitle](defaultbuttontitle%28%29.md): Returns the title of the Print panel’s default button.
- [setDefaultButtonTitle:](setdefaultbuttontitle%28__%29.md): Sets the title of the Print panel’s default button.
- [helpAnchor](helpanchor.md): The HTML help anchor associated with the Print panel.
