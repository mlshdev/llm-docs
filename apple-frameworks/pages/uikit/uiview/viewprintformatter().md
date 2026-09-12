> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/viewprintformatter()](https://developer.apple.com/documentation/uikit/uiview/viewprintformatter())

# viewPrintFormatter() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Returns a print formatter for the receiving view.

## Declaration

```swift
func viewPrintFormatter() -> UIViewPrintFormatter
```

<a id="return-value"></a>

## Return Value

A [UIViewPrintFormatter](../uiviewprintformatter.md) object or `nil` if the object could not be created. If it is successfully created, the returned object is automatically associated with this view.

<a id="Discussion"></a>

## Discussion

When initiating a print job, you can call this method to obtain an appropriate view print formatter object for your view. You can use the formatter object to configure the page layout options for your view during printing. Each time you call this method, you get a unique view print formatter object.

For more information about how to use print formatters to configure the printing behavior of your view, see [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156).

## See Also

### Formatting printed view content

- [draw(\_:for:)](draw%28__for_%29.md): Implemented to draw the view’s content for printing.

# viewPrintFormatter (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Returns a print formatter for the receiving view.

## Declaration

```objectivec
- (UIViewPrintFormatter *) viewPrintFormatter;
```

<a id="return-value"></a>

## Return Value

A [UIViewPrintFormatter](../uiviewprintformatter.md) object or `nil` if the object could not be created. If it is successfully created, the returned object is automatically associated with this view.

<a id="Discussion"></a>

## Discussion

When initiating a print job, you can call this method to obtain an appropriate view print formatter object for your view. You can use the formatter object to configure the page layout options for your view during printing. Each time you call this method, you get a unique view print formatter object.

For more information about how to use print formatters to configure the printing behavior of your view, see [Drawing and Printing Guide for iOS](https://developer.apple.com/library/archive/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010156).

## See Also

### Formatting printed view content

- [drawRect:forViewPrintFormatter:](draw%28__for_%29.md): Implemented to draw the view’s content for printing.
