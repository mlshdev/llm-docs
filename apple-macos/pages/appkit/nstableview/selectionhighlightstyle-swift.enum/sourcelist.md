> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/selectionhighlightstyle-swift.enum/sourcelist](https://developer.apple.com/documentation/appkit/nstableview/selectionhighlightstyle-swift.enum/sourcelist)

# NSTableView.SelectionHighlightStyle.sourceList (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+ (deprecated in 12.0)

> Set the NSTableView.style property to NSTableViewStyleSourceList instead.

## Declaration

```swift
case sourceList
```

<a id="Discussion"></a>

## Discussion

The source list style of NSTableView. On 10.5, a light blue gradient is used to highlight selected rows.

> **Note**

>  When using this style, cell subclasses that implement `drawsBackground` must set the value to [false](https://developer.apple.com/documentation/swift/false). Otherwise, the cells will draw over the tableview’s highlighting.

## See Also

### Constants

- [NSTableView.SelectionHighlightStyle.none](none.md)
- [NSTableView.SelectionHighlightStyle.regular](regular.md)

# NSTableViewSelectionHighlightStyleSourceList (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 12.0)

> Set the NSTableView.style property to NSTableViewStyleSourceList instead.

## Declaration

```objectivec
NSTableViewSelectionHighlightStyleSourceList
```

<a id="Discussion"></a>

## Discussion

The source list style of NSTableView. On 10.5, a light blue gradient is used to highlight selected rows.

> **Note**

>  When using this style, cell subclasses that implement `drawsBackground` must set the value to [false](https://developer.apple.com/documentation/swift/false). Otherwise, the cells will draw over the tableview’s highlighting.

## See Also

### Constants

- [NSTableViewSelectionHighlightStyleNone](none.md)
- [NSTableViewSelectionHighlightStyleRegular](regular.md)
