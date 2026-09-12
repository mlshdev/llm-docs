> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/printpagerenderer](https://developer.apple.com/documentation/uikit/uiprintformatter/printpagerenderer)

# printPageRenderer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the page renderer for the print formatter.

## Declaration

```swift
weak var printPageRenderer: UIPrintPageRenderer? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiving print formatter was not added to a page renderer—that is, it was assigned to the [printFormatter](../uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](../uiprintinteractioncontroller.md) class—the value returned is `nil`.

## See Also

### Communicating with the page renderer

- [removeFromPrintPageRenderer()](removefromprintpagerenderer%28%29.md): Removes the print formatter from the page renderer.

# printPageRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the page renderer for the print formatter.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIPrintPageRenderer * printPageRenderer;
```

<a id="Discussion"></a>

## Discussion

If the receiving print formatter was not added to a page renderer—that is, it was assigned to the [printFormatter](../uiprintinteractioncontroller/printformatter.md) property of the [UIPrintInteractionController](../uiprintinteractioncontroller.md) class—the value returned is `nil`.

## See Also

### Communicating with the page renderer

- [removeFromPrintPageRenderer](removefromprintpagerenderer%28%29.md): Removes the print formatter from the page renderer.
