> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:choosepaper:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:choosepaper:))

# printInteractionController(\_:choosePaper:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for an object that encapsulates the paper size and printing area for the print job.

## Declaration

```swift
optional func printInteractionController(_ printInteractionController: UIPrintInteractionController, choosePaper paperList: [UIPrintPaper]) -> UIPrintPaper
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `paperList`: An array of [UIPrintPaper](../uiprintpaper.md) objects that represent combinations of paper sizes and imageable areas supported by the selected printer.

<a id="return-value"></a>

## Return Value

A [UIPrintPaper](../uiprintpaper.md) object representing both the paper size and imageable area (or printable rectangle) to use for the print job.

<a id="Discussion"></a>

## Discussion

This method is intended for apps (typically document-based apps) that have a notion of distinct paper sizes. The delegate can examine the objects in `paperList` to locate the paper size and printable rectangle combination that is best suited for its needs and return the encapsulating `UIPrintPaper` object. Or it can call the [bestPaper(forPageSize:withPapersFrom:)](../uiprintpaper/bestpaper%28forpagesize_withpapersfrom_%29.md) class method of the [UIPrintPaper](../uiprintpaper.md) class, passing in a specific page size (typically the document size), and return the object returned by that method.

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Choosing a Paper Size for the Print Job

- [printInteractionController(\_:cutLengthFor:)](printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.
- [printInteractionController(\_:chooseCutterBehavior:)](printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.

# printInteractionController:choosePaper: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for an object that encapsulates the paper size and printing area for the print job.

## Declaration

```objectivec
- (UIPrintPaper *) printInteractionController:(UIPrintInteractionController *) printInteractionController choosePaper:(NSArray<UIPrintPaper *> *) paperList;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `paperList`: An array of [UIPrintPaper](../uiprintpaper.md) objects that represent combinations of paper sizes and imageable areas supported by the selected printer.

<a id="return-value"></a>

## Return Value

A [UIPrintPaper](../uiprintpaper.md) object representing both the paper size and imageable area (or printable rectangle) to use for the print job.

<a id="Discussion"></a>

## Discussion

This method is intended for apps (typically document-based apps) that have a notion of distinct paper sizes. The delegate can examine the objects in `paperList` to locate the paper size and printable rectangle combination that is best suited for its needs and return the encapsulating `UIPrintPaper` object. Or it can call the [bestPaperForPageSize:withPapersFromArray:](../uiprintpaper/bestpaper%28forpagesize_withpapersfrom_%29.md) class method of the [UIPrintPaper](../uiprintpaper.md) class, passing in a specific page size (typically the document size), and return the object returned by that method.

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Choosing a Paper Size for the Print Job

- [printInteractionController:cutLengthForPaper:](printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.
- [printInteractionController:chooseCutterBehavior:](printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.
