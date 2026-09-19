> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprintpaper/papersize

# paperSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the sheet to use for printing.

## Declaration

```swift
var paperSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

The paper size is often associated with a standard designation, such as “Letter” and “A4”. For example, the paper size for a Letter sheet of paper is 612 points wide and 792 points high.

## See Also

### Getting the paper size and the printing area

- [printableRect](printablerect.md): The rectangle that represents the portion of the paper that can be imaged upon.

# paperSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The size of the sheet to use for printing.

## Declaration

```objectivec
@property (readonly) CGSize paperSize;
```

<a id="Discussion"></a>

## Discussion

The paper size is often associated with a standard designation, such as “Letter” and “A4”. For example, the paper size for a Letter sheet of paper is 612 points wide and 792 points high.

## See Also

### Getting the paper size and the printing area

- [printableRect](printablerect.md): The rectangle that represents the portion of the paper that can be imaged upon.
