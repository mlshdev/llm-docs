> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgrouptouchbaritem/init(alertstylewithidentifier:)](https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/init(alertstylewithidentifier:))

# init(alertStyleWithIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+

Initializes and returns a group item configured to match system alerts.

## Declaration

```swift
convenience init(alertStyleWithIdentifier identifier: NSTouchBarItem.Identifier)
```

<a id="Discussion"></a>

## Discussion

You can control spacing between items, but it is recommended to use [fixedSpaceLarge](../nstouchbaritem/identifier-swift.struct/fixedspacelarge.md) to maintain consistency.

The [groupUserInterfaceLayoutDirection](groupuserinterfacelayoutdirection.md) is set to match the application’s [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md).

## See Also

### Creating a group

- [init(identifier:items:)](init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [init(identifier:items:allowedCompressionOptions:)](init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.

# alertStyleGroupItemWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

Initializes and returns a group item configured to match system alerts.

## Declaration

```objectivec
+ (instancetype) alertStyleGroupItemWithIdentifier:(NSTouchBarItemIdentifier) identifier;
```

<a id="Discussion"></a>

## Discussion

You can control spacing between items, but it is recommended to use [NSTouchBarItemIdentifierFixedSpaceLarge](../nstouchbaritem/identifier-swift.struct/fixedspacelarge.md) to maintain consistency.

The [groupUserInterfaceLayoutDirection](groupuserinterfacelayoutdirection.md) is set to match the application’s [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md).

## See Also

### Creating a group

- [groupItemWithIdentifier:items:](init%28identifier_items_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items.
- [groupItemWithIdentifier:items:allowedCompressionOptions:](init%28identifier_items_allowedcompressionoptions_%29.md): Initializes and returns a group item whose bar is constructed from the supplied items, and with the specified compression options.
