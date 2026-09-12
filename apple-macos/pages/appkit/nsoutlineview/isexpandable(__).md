> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/isexpandable(_:)](https://developer.apple.com/documentation/appkit/nsoutlineview/isexpandable(_:))

# isExpandable(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether a given item is expandable.

## Declaration

```swift
func isExpandable(_ item: Any?) -> Bool
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` is expandable—that is, `item` can contain other items, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [expandItem(\_:)](expanditem%28__%29.md): Expands a given item.

### Working with Expandability

- [isItemExpanded(\_:)](isitemexpanded%28__%29.md): Returns a Boolean value that indicates whether a given item is expanded.

# isExpandable: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether a given item is expandable.

## Declaration

```objectivec
- (BOOL) isExpandable:(id) item;
```

## Parameters

- `item`: An item in the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` is expandable—that is, `item` can contain other items, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [expandItem:](expanditem%28__%29.md): Expands a given item.

### Working with Expandability

- [isItemExpanded:](isitemexpanded%28__%29.md): Returns a Boolean value that indicates whether a given item is expanded.
