> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprintformatter/removefromprintpagerenderer()

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
