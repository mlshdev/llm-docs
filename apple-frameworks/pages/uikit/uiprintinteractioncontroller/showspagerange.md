> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/showspagerange](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/showspagerange)

# showsPageRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that determines whether the printing options include a page-range control.

> The print interaction controller always shows the page range because a person can remove pages from the print preview.

## Declaration

```swift
var showsPageRange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you assign printable content to the [printingItems](printingitems.md) property, the page-range control is not shown, even if `showPageRange` is [true](https://developer.apple.com/documentation/swift/true). In other cases, the number of pages to print must be greater than 1 form the page-range control to appear.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.

# showsPageRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that determines whether the printing options include a page-range control.

> The print interaction controller always shows the page range because a person can remove pages from the print preview.

## Declaration

```objectivec
@property (nonatomic) BOOL showsPageRange;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If you assign printable content to the [printingItems](printingitems.md) property, the page-range control is not shown, even if `showPageRange` is [true](https://developer.apple.com/documentation/swift/true). In other cases, the number of pages to print must be greater than 1 form the page-range control to appear.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
