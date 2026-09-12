> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/showspaperselectionforloadedpapers](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/showspaperselectionforloadedpapers)

# showsPaperSelectionForLoadedPapers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the paper selection menu displays.

## Declaration

```swift
var showsPaperSelectionForLoadedPapers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Setting the value to [true](https://developer.apple.com/documentation/swift/true) enables a paper selection menu on printers that support different types of paper and have more than one paper type loaded. On printers where only one paper type is available, no paper selection menu is displayed, regardless of the value of this property.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.

# showsPaperSelectionForLoadedPapers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the paper selection menu displays.

## Declaration

```objectivec
@property (nonatomic) BOOL showsPaperSelectionForLoadedPapers;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). Setting the value to [true](https://developer.apple.com/documentation/swift/true) enables a paper selection menu on printers that support different types of paper and have more than one paper type loaded. On printers where only one paper type is available, no paper selection menu is displayed, regardless of the value of this property.

## See Also

### Accessing print-job information

- [printInfo](printinfo.md): An object that encapsulates information about the print job.
- [printPaper](printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperOrientation](showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.
