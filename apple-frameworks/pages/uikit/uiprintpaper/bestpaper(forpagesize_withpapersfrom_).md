> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpaper/bestpaper(forpagesize:withpapersfrom:)](https://developer.apple.com/documentation/uikit/uiprintpaper/bestpaper(forpagesize:withpapersfrom:))

# bestPaper(forPageSize:withPapersFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The print-paper object that UIKit determines to be the best for a print job based on the specified page size and the paper size–imageable area combinations specific to the printer.

## Declaration

```swift
class func bestPaper(forPageSize contentSize: CGSize, withPapersFrom paperList: [UIPrintPaper]) -> UIPrintPaper
```

## Parameters

- `contentSize`: The size of the printed page that your application requests, in points. You should think of this as the size of the physical sheet of paper to use in printing without consideration of the margin.
- `paperList`: An array of `UIPrintPaper` objects that represent combinations of supported paper size and printable areas. The array of objects usually comes directly from the second argument of the [printInteractionController(\_:choosePaper:)](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method of the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

An instance of `UIPrintPaper` that represents the optimal printable area and paper size for the current print job. Returns `nil` if the instance could not be created.

<a id="Discussion"></a>

## Discussion

The delegate of [UIPrintInteractionController](../uiprintinteractioncontroller.md) may call this method in its implementation of the [printInteractionController(\_:choosePaper:)](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method declared in the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol.

# bestPaperForPageSize:withPapersFromArray: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The print-paper object that UIKit determines to be the best for a print job based on the specified page size and the paper size–imageable area combinations specific to the printer.

## Declaration

```objectivec
+ (UIPrintPaper *) bestPaperForPageSize:(CGSize) contentSize withPapersFromArray:(NSArray<UIPrintPaper *> *) paperList;
```

## Parameters

- `contentSize`: The size of the printed page that your application requests, in points. You should think of this as the size of the physical sheet of paper to use in printing without consideration of the margin.
- `paperList`: An array of `UIPrintPaper` objects that represent combinations of supported paper size and printable areas. The array of objects usually comes directly from the second argument of the [printInteractionController:choosePaper:](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method of the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

An instance of `UIPrintPaper` that represents the optimal printable area and paper size for the current print job. Returns `nil` if the instance could not be created.

<a id="Discussion"></a>

## Discussion

The delegate of [UIPrintInteractionController](../uiprintinteractioncontroller.md) may call this method in its implementation of the [printInteractionController:choosePaper:](../uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) method declared in the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol.
