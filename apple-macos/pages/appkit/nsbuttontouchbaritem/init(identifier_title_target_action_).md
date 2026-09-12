> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttontouchbaritem/init(identifier:title:target:action:)](https://developer.apple.com/documentation/appkit/nsbuttontouchbaritem/init(identifier:title:target:action:))

# init(identifier:title:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, title: String, target: Any?, action: Selector?)
```

## See Also

### Creating a button item

- [init(identifier:image:target:action:)](init%28identifier_image_target_action_%29.md)
- [init(identifier:title:image:target:action:)](init%28identifier_title_image_target_action_%29.md)

# buttonTouchBarItemWithIdentifier:title:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

## Declaration

```objectivec
+ (instancetype) buttonTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier title:(NSString *) title target:(id) target action:(SEL) action;
```

## See Also

### Creating a button item

- [buttonTouchBarItemWithIdentifier:image:target:action:](init%28identifier_image_target_action_%29.md)
- [buttonTouchBarItemWithIdentifier:title:image:target:action:](init%28identifier_title_image_target_action_%29.md)
