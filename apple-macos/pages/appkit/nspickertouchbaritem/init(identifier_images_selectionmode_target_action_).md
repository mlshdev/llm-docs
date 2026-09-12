> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspickertouchbaritem/init(identifier:images:selectionmode:target:action:)](https://developer.apple.com/documentation/appkit/nspickertouchbaritem/init(identifier:images:selectionmode:target:action:))

# init(identifier:images:selectionMode:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, images: [UIImage], selectionMode: NSPickerTouchBarItem.SelectionMode, target: Any?, action: Selector?)
```

```swift
convenience init(identifier: NSTouchBarItem.Identifier, images: [NSImage], selectionMode: NSPickerTouchBarItem.SelectionMode, target: Any?, action: Selector?)
```

## See Also

### Creating a picker item

- [init(identifier:labels:selectionMode:target:action:)](init%28identifier_labels_selectionmode_target_action_%29.md)

# pickerTouchBarItemWithIdentifier:images:selectionMode:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
+ (instancetype) pickerTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier images:(NSArray<UIImage *> *) images selectionMode:(NSPickerTouchBarItemSelectionMode) selectionMode target:(id) target action:(SEL) action;
```

```objectivec
+ (instancetype) pickerTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier images:(NSArray<NSImage *> *) images selectionMode:(NSPickerTouchBarItemSelectionMode) selectionMode target:(id) target action:(SEL) action;
```

## See Also

### Creating a picker item

- [pickerTouchBarItemWithIdentifier:labels:selectionMode:target:action:](init%28identifier_labels_selectionmode_target_action_%29.md)
