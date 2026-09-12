> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printinfo](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printinfo)

# printInfo (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that encapsulates information about the print job.

## Declaration

```swift
var printInfo: UIPrintInfo? { get set }
```

<a id="Discussion"></a>

## Discussion

An instance of [UIPrintInfo](../uiprintinfo.md) includes properties such as the print-job name, the printer identifier, the orientation of the printed content, the duplex mode, and the kind of content (general, photo, or grayscale). If you do not assign an instance of [UIPrintInfo](../uiprintinfo.md) to this property, the UIKit printing system assumes defaults for many of these properties. Users can modify the selected printer and the duplex mode (if available on the printer). Once the printing options are presented, any changes to the `UIPrintInfo` object referenced by this property are ignored. The object is released when printing completes.

## See Also

### Accessing print-job information

- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.

# printInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that encapsulates information about the print job.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIPrintInfo * printInfo;
```

<a id="Discussion"></a>

## Discussion

An instance of [UIPrintInfo](../uiprintinfo.md) includes properties such as the print-job name, the printer identifier, the orientation of the printed content, the duplex mode, and the kind of content (general, photo, or grayscale). If you do not assign an instance of [UIPrintInfo](../uiprintinfo.md) to this property, the UIKit printing system assumes defaults for many of these properties. Users can modify the selected printer and the duplex mode (if available on the printer). Once the printing options are presented, any changes to the `UIPrintInfo` object referenced by this property are ignored. The object is released when printing completes.

## See Also

### Accessing print-job information

- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.
