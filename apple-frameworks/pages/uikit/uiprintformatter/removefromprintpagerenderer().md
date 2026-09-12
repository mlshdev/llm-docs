> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/removefromprintpagerenderer()](https://developer.apple.com/documentation/uikit/uiprintformatter/removefromprintpagerenderer())

# removeFromPrintPageRenderer() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes the print formatter from the page renderer.

## Declaration

```swift
func removeFromPrintPageRenderer()
```

<a id="Discussion"></a>

## Discussion

A print formatter is typically associated with a pages of a [UIPrintPageRenderer](../uiprintpagerenderer.md) object through the [addPrintFormatter(\_:startingAtPageAt:)](../uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method.

## See Also

### Communicating with the page renderer

- [printPageRenderer](printpagerenderer.md): Returns the page renderer for the print formatter.

# removeFromPrintPageRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes the print formatter from the page renderer.

## Declaration

```objectivec
- (void) removeFromPrintPageRenderer;
```

<a id="Discussion"></a>

## Discussion

A print formatter is typically associated with a pages of a [UIPrintPageRenderer](../uiprintpagerenderer.md) object through the [addPrintFormatter:startingAtPageAtIndex:](../uiprintpagerenderer/addprintformatter%28__startingatpageat_%29.md) method.

## See Also

### Communicating with the page renderer

- [printPageRenderer](printpagerenderer.md): Returns the page renderer for the print formatter.
