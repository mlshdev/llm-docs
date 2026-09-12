> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspickertouchbaritem/init(identifier:labels:selectionmode:target:action:)](https://developer.apple.com/documentation/appkit/nspickertouchbaritem/init(identifier:labels:selectionmode:target:action:))

# init(identifier:labels:selectionMode:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, labels: [String], selectionMode: NSPickerTouchBarItem.SelectionMode, target: Any?, action: Selector?)
```

## See Also

### Creating a picker item

- [init(identifier:images:selectionMode:target:action:)](init%28identifier_images_selectionmode_target_action_%29.md)

# pickerTouchBarItemWithIdentifier:labels:selectionMode:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
+ (instancetype) pickerTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier labels:(NSArray<NSString *> *) labels selectionMode:(NSPickerTouchBarItemSelectionMode) selectionMode target:(id) target action:(SEL) action;
```

## See Also

### Creating a picker item

- [pickerTouchBarItemWithIdentifier:images:selectionMode:target:action:](init%28identifier_images_selectionmode_target_action_%29.md)
