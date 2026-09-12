> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/paperrect](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/paperrect)

# paperRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the paper for printing.

## Declaration

```swift
var paperRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a rectangle that defines the size of paper chosen for the print job. The origin is always (0,0).

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Accessing information about the print job

- [numberOfPages](numberofpages.md): The number of pages to render.
- [printableRect](printablerect.md): The area in which printing can occur.

# paperRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the paper for printing.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect paperRect;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a rectangle that defines the size of paper chosen for the print job. The origin is always (0,0).

## See Also

### Related Documentation

- [printPaper](../uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.

### Accessing information about the print job

- [numberOfPages](numberofpages.md): The number of pages to render.
- [printableRect](printablerect.md): The area in which printing can occur.
