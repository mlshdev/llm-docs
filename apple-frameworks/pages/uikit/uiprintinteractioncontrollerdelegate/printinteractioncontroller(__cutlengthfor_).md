> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:cutlengthfor:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:cutlengthfor:))

# printInteractionController(\_:cutLengthFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for a length to use when cutting the page.

## Declaration

```swift
optional func printInteractionController(_ printInteractionController: UIPrintInteractionController, cutLengthFor paper: UIPrintPaper) -> CGFloat
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `paper`: A [UIPrintPaper](../uiprintpaper.md) that specifies the maximum physical and printable areas of the page.

<a id="return-value"></a>

## Return Value

The physical length of the page in points.

<a id="Discussion"></a>

## Discussion

Some printers can cut a roll of print paper at a particular length. If you implement this method in your delegate, then it may be called during a print job. Your delegate should determine the length in which the content fits and return this value. When printed, the paper will be cut to this length.

## See Also

### Choosing a Paper Size for the Print Job

- [printInteractionController(\_:choosePaper:)](printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController(\_:chooseCutterBehavior:)](printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.

# printInteractionController:cutLengthForPaper: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for a length to use when cutting the page.

## Declaration

```objectivec
- (CGFloat) printInteractionController:(UIPrintInteractionController *) printInteractionController cutLengthForPaper:(UIPrintPaper *) paper;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `paper`: A [UIPrintPaper](../uiprintpaper.md) that specifies the maximum physical and printable areas of the page.

<a id="return-value"></a>

## Return Value

The physical length of the page in points.

<a id="Discussion"></a>

## Discussion

Some printers can cut a roll of print paper at a particular length. If you implement this method in your delegate, then it may be called during a print job. Your delegate should determine the length in which the content fits and return this value. When printed, the paper will be cut to this length.

## See Also

### Choosing a Paper Size for the Print Job

- [printInteractionController:choosePaper:](printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController:chooseCutterBehavior:](printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.
