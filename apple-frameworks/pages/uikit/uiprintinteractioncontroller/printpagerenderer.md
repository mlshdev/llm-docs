> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/printpagerenderer](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/printpagerenderer)

# printPageRenderer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that draws pages of printable content when UIKit requests it.

## Declaration

```swift
var printPageRenderer: UIPrintPageRenderer? { get set }
```

<a id="Discussion"></a>

## Discussion

The object assigned to this property must be an instance of a custom subclass of [UIPrintPageRenderer](../uiprintpagerenderer.md). The `UIPrintInteractionController` class retains the page-renderer object and releases it at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printingItem](printingitem.md), [printFormatter](printformatter.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and the rendered content is greater than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.

# printPageRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that draws pages of printable content when UIKit requests it.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIPrintPageRenderer * printPageRenderer;
```

<a id="Discussion"></a>

## Discussion

The object assigned to this property must be an instance of a custom subclass of [UIPrintPageRenderer](../uiprintpagerenderer.md). The `UIPrintInteractionController` class retains the page-renderer object and releases it at the end of the print job. The default value is `nil`.

If you set this property, `UIPrintInteractionController` sets the [printingItems](printingitems.md), [printingItem](printingitem.md), [printFormatter](printformatter.md) properties to `nil`. (Only one of these properties can be set for a print job.)

If this property is set and the [showsPageRange](showspagerange.md) property is set to [true](https://developer.apple.com/documentation/swift/true)—and the rendered content is greater than one page—the printing options include the control for selecting a page range.

## See Also

### Providing the source of printable content

- [printingItem](printingitem.md): A single ready-to-print object.
- [printingItems](printingitems.md): An array of ready-to-print objects.
- [printFormatter](printformatter.md): An object that lays out the content of pages according to the kind of content.
