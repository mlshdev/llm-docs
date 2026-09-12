> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpaper/printablerect](https://developer.apple.com/documentation/uikit/uiprintpaper/printablerect)

# printableRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The rectangle that represents the portion of the paper that can be imaged upon.

## Declaration

```swift
var printableRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

Typically, UIKit passes this value into the last argument of the [UIPrintPageRenderer](../uiprintpagerenderer.md) method [drawPage(at:in:)](../uiprintpagerenderer/drawpage%28at_in_%29.md).

## See Also

### Getting the paper size and the printing area

- [paperSize](papersize.md): The size of the sheet to use for printing.

# printableRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The rectangle that represents the portion of the paper that can be imaged upon.

## Declaration

```objectivec
@property (readonly) CGRect printableRect;
```

<a id="Discussion"></a>

## Discussion

Typically, UIKit passes this value into the last argument of the [UIPrintPageRenderer](../uiprintpagerenderer.md) method [drawPageAtIndex:inRect:](../uiprintpagerenderer/drawpage%28at_in_%29.md).

## See Also

### Getting the paper size and the printing area

- [paperSize](papersize.md): The size of the sheet to use for printing.
