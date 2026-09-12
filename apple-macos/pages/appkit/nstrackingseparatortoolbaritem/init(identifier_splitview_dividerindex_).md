> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingseparatortoolbaritem/init(identifier:splitview:dividerindex:)](https://developer.apple.com/documentation/appkit/nstrackingseparatortoolbaritem/init(identifier:splitview:dividerindex:))

# init(identifier:splitView:dividerIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a new tracking separator toolbar item and configures it to align with the divider of the split view.

## Declaration

```swift
convenience init(identifier: NSToolbarItem.Identifier, splitView: NSSplitView, dividerIndex: Int)
```

## Parameters

- `identifier`: The identifier of the toolbar item.
- `splitView`: The split view to align with the tracking separator.
- `dividerIndex`: The index of the divider in the split view.

# trackingSeparatorToolbarItemWithIdentifier:splitView:dividerIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates a new tracking separator toolbar item and configures it to align with the divider of the split view.

## Declaration

```objectivec
+ (instancetype) trackingSeparatorToolbarItemWithIdentifier:(NSToolbarItemIdentifier) identifier splitView:(NSSplitView *) splitView dividerIndex:(NSInteger) dividerIndex;
```

## Parameters

- `identifier`: The identifier of the toolbar item.
- `splitView`: The split view to align with the tracking separator.
- `dividerIndex`: The index of the divider in the split view.
