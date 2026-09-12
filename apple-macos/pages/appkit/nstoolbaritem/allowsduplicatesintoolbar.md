> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/allowsduplicatesintoolbar](https://developer.apple.com/documentation/appkit/nstoolbaritem/allowsduplicatesintoolbar)

# allowsDuplicatesInToolbar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A Boolean value that indicates whether the toolbar item can appear more than once in a toolbar.

> Duplicates are no longer supported.

## Declaration

```swift
var allowsDuplicatesInToolbar: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the value in this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar allows someone to drag more than one copy of the toolbar item from the customization palette. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the toolbar prevents someone from dragging more than one copy of the item from the customization palette.

By default, if an item with the same identifier is already in the toolbar, dragging it in again will effectively move it to the new position.

## See Also

### Deprecated

- [minSize](minsize.md): Deprecated. The toolbar item’s minimum size.
- [maxSize](maxsize.md): Deprecated. The toolbar item’s maximum size.

# allowsDuplicatesInToolbar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A Boolean value that indicates whether the toolbar item can appear more than once in a toolbar.

> Duplicates are no longer supported.

## Declaration

```objectivec
@property (readonly) BOOL allowsDuplicatesInToolbar;
```

<a id="Discussion"></a>

## Discussion

If the value in this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar allows someone to drag more than one copy of the toolbar item from the customization palette. If the value of this property is [false](https://developer.apple.com/documentation/swift/false), the toolbar prevents someone from dragging more than one copy of the item from the customization palette.

By default, if an item with the same identifier is already in the toolbar, dragging it in again will effectively move it to the new position.

## See Also

### Deprecated

- [minSize](minsize.md): Deprecated. The toolbar item’s minimum size.
- [maxSize](maxsize.md): Deprecated. The toolbar item’s maximum size.
