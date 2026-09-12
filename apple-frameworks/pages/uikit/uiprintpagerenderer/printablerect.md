> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/printablerect](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/printablerect)

# printableRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The area in which printing can occur.

## Declaration

```swift
var printableRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a rectangle that defines the area in which the printer can print content. Sometimes this is referred to as the imageable area of the paper.

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Accessing information about the print job

- [numberOfPages](numberofpages.md): The number of pages to render.
- [paperRect](paperrect.md): The size of the paper for printing.

# printableRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The area in which printing can occur.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect printableRect;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a rectangle that defines the area in which the printer can print content. Sometimes this is referred to as the imageable area of the paper.

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Accessing information about the print job

- [numberOfPages](numberofpages.md): The number of pages to render.
- [paperRect](paperrect.md): The size of the paper for printing.
