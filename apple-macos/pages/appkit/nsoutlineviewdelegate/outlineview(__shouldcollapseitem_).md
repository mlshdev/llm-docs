> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldcollapseitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldcollapseitem:))

# outlineView(\_:shouldCollapseItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should collapse a given item.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldCollapseItem item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item that should collapse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to collapse `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow collapsing of specific items. For example, if the first row of your outline view should not be collapsed, your delegate method could contain this line of code:

```objc
return [outlineView rowForItem:item]!=0;
```

## See Also

### Expanding and Collapsing the Outline

- [outlineView(\_:shouldExpandItem:)](outlineview%28__shouldexpanditem_%29.md): Returns a Boolean value that indicates whether the outline view should expand a given item.

# outlineView:shouldCollapseItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should collapse a given item.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldCollapseItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: The item that should collapse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to collapse `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

The delegate can implement this method to disallow collapsing of specific items. For example, if the first row of your outline view should not be collapsed, your delegate method could contain this line of code:

```objc
return [outlineView rowForItem:item]!=0;
```

## See Also

### Expanding and Collapsing the Outline

- [outlineView:shouldExpandItem:](outlineview%28__shouldexpanditem_%29.md): Returns a Boolean value that indicates whether the outline view should expand a given item.
