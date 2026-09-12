> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/pagecount](https://developer.apple.com/documentation/uikit/uiprintformatter/pagecount)

# pageCount (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages to print.

## Declaration

```swift
var pageCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` calculates this value based on the layout metrics and content.

## See Also

### Managing pagination

- [startPage](startpage.md): The index of the first page that the print formatter lays out.

# pageCount (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages to print.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger pageCount;
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` calculates this value based on the layout metrics and content.

## See Also

### Managing pagination

- [startPage](startpage.md): The index of the first page that the print formatter lays out.
