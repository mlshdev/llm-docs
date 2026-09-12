> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem/init(identifier:items:allowedcompressionoptions:)](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/init(identifier:items:allowedcompressionoptions:))

# init(identifier:items:allowedCompressionOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem], allowedCompressionOptions: NSUserInterfaceCompressionOptions)
```

<a id="Discussion"></a>

## Discussion

Use this initializer to specify which compression options are applied to the group item. The system applies options in the following default order: `breakEqualWidths`, `reduceMetrics`, `hideText`, `hideImages`.

If you want to use non-standard compression options, add them by using the [prioritizedCompressionOptions](prioritizedcompressionoptions.md) property.

## See Also

### Creating a group

- [init(identifier:items:)](init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [init(alertStyleWithIdentifier:)](init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.

# groupItemWithIdentifier:items:allowedCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.

## Declaration

```objectivec
+ (instancetype) groupItemWithIdentifier:(NSTouchBarItemIdentifier) identifier items:(NSArray<NSTouchBarItem *> *) items allowedCompressionOptions:(NSUserInterfaceCompressionOptions *) allowedCompressionOptions;
```

<a id="Discussion"></a>

## Discussion

Use this initializer to specify which compression options are applied to the group item. The system applies options in the following default order: `breakEqualWidths`, `reduceMetrics`, `hideText`, `hideImages`.

If you want to use non-standard compression options, add them by using the [prioritizedCompressionOptions](prioritizedcompressionoptions.md) property.

## See Also

### Creating a group

- [groupItemWithIdentifier:items:](init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [alertStyleGroupItemWithIdentifier:](init%28alertstylewithidentifier_%29.md): Initializes and returns a group item configured to match system alerts.
