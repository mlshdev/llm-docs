> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem/init(identifier:items:)](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/init(identifier:items:))

# init(identifier:items:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Initializes and returns a group item whose bar is constructed from the supplied items.

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem])
```

## See Also

### Creating a group

- [init(identifier:items:allowedCompressionOptions:)](init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.
- [init(alertStyleWithIdentifier:)](init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.

# groupItemWithIdentifier:items: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Initializes and returns a group item whose bar is constructed from the supplied items.

## Declaration

```objectivec
+ (instancetype) groupItemWithIdentifier:(NSTouchBarItemIdentifier) identifier items:(NSArray<NSTouchBarItem *> *) items;
```

## See Also

### Creating a group

- [groupItemWithIdentifier:items:allowedCompressionOptions:](init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.
- [alertStyleGroupItemWithIdentifier:](init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.
