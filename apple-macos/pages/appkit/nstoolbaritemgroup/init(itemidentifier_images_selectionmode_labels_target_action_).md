> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/init(itemidentifier:images:selectionmode:labels:target:action:)](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/init(itemidentifier:images:selectionmode:labels:target:action:))

# init(itemIdentifier:images:selectionMode:labels:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Creates a grouped toolbar item with images.

## Declaration

```swift
convenience init(itemIdentifier: NSToolbarItem.Identifier, images: [UIImage], selectionMode: NSToolbarItemGroup.SelectionMode, labels: [String]?, target: Any?, action: Selector?)
```

```swift
convenience init(itemIdentifier: NSToolbarItem.Identifier, images: [NSImage], selectionMode: NSToolbarItemGroup.SelectionMode, labels: [String]?, target: Any?, action: Selector?)
```

## Parameters

- `itemIdentifier`: The identifier for the grouped toolbar item.
- `images`: An array of images to present as subitems in the grouped toolbar item.
- `selectionMode`: A value that indicates how the grouped toolbar item presents selections.
- `labels`: Labels that correspond to the specified images.
- `target`: The target that the toolbar calls upon selection.

  If target is `nil`, the toolbar attempts to invoke the specified action on the first responder and, failing that, passes the action up the responder chain.
- `action`: The selector that the toolbar invokes on the target.

## See Also

### Creating grouped toolbar items

- [init(itemIdentifier:titles:selectionMode:labels:target:action:)](init%28itemidentifier_titles_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with labels.

# groupWithItemIdentifier:images:selectionMode:labels:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

Creates a grouped toolbar item with images.

## Declaration

```objectivec
+ (instancetype) groupWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier images:(NSArray<UIImage *> *) images selectionMode:(NSToolbarItemGroupSelectionMode) selectionMode labels:(NSArray<NSString *> *) labels target:(id) target action:(SEL) action;
```

```objectivec
+ (instancetype) groupWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier images:(NSArray<NSImage *> *) images selectionMode:(NSToolbarItemGroupSelectionMode) selectionMode labels:(NSArray<NSString *> *) labels target:(id) target action:(SEL) action;
```

## Parameters

- `itemIdentifier`: The identifier for the grouped toolbar item.
- `images`: An array of images to present as subitems in the grouped toolbar item.
- `selectionMode`: A value that indicates how the grouped toolbar item presents selections.
- `labels`: Labels that correspond to the specified images.
- `target`: The target that the toolbar calls upon selection.

  If target is `nil`, the toolbar attempts to invoke the specified action on the first responder and, failing that, passes the action up the responder chain.
- `action`: The selector that the toolbar invokes on the target.

## See Also

### Creating grouped toolbar items

- [groupWithItemIdentifier:titles:selectionMode:labels:target:action:](init%28itemidentifier_titles_selectionmode_labels_target_action_%29.md): Creates a grouped toolbar item with labels.
