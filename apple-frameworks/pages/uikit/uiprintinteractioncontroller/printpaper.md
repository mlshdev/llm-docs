> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printpaper](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printpaper)

# printPaper (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that represents the paper size and printing area for the print job.

## Declaration

```swift
var printPaper: UIPrintPaper? { get }
```

<a id="Discussion"></a>

## Discussion

`UIPrintInteractionController` sets this property immediately after the user selects a printer and before it calls the delegate’s [printInteractionControllerWillStartJob(\_:)](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) method. If its delegate implements the [printInteractionController(\_:choosePaper:)](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method of the `UIPrintInteractionControllerDelegate` protocol, it can return the [UIPrintPaper](../uiprintpaper.md) object to assign to this property. Otherwise, UIKit assigns an object with a default paper size and printing rectangle that is based on the output type and the capabilities of the destination printer. This object is released when the print job finishes.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.

# printPaper (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that represents the paper size and printing area for the print job.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPrintPaper * printPaper;
```

<a id="Discussion"></a>

## Discussion

`UIPrintInteractionController` sets this property immediately after the user selects a printer and before it calls the delegate’s [printInteractionControllerWillStartJob:](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) method. If its delegate implements the [printInteractionController:choosePaper:](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method of the `UIPrintInteractionControllerDelegate` protocol, it can return the [UIPrintPaper](../uiprintpaper.md) object to assign to this property. Otherwise, UIKit assigns an object with a default paper size and printing rectangle that is based on the output type and the capabilities of the destination printer. This object is released when the print job finishes.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.
