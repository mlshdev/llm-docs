> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printformatter](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printformatter)

# printFormatter (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out the content of pages according to the kind of content.

## Declaration

```swift
var printFormatter: UIPrintFormatter? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign to this property an instance of one of the concrete subclasses of [UIPrintFormatter](../uiprintformatter.md): [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), and [UIViewPrintFormatter](../uiviewprintformatter.md). This object is released at the end of the print job.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printingItem](printingitem.md), and [printPageRenderer](printpagerenderer.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and if the formatter represents content of more than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.

# printFormatter (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that lays out the content of pages according to the kind of content.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIPrintFormatter * printFormatter;
```

<a id="Discussion"></a>

## Discussion

Assign to this property an instance of one of the concrete subclasses of [UIPrintFormatter](../uiprintformatter.md): [UISimpleTextPrintFormatter](../uisimpletextprintformatter.md), [UIMarkupTextPrintFormatter](../uimarkuptextprintformatter.md), and [UIViewPrintFormatter](../uiviewprintformatter.md). This object is released at the end of the print job.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printingItem](printingitem.md), and [printPageRenderer](printpagerenderer.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and if the formatter represents content of more than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
