> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/identifier-swift.struct/fixedspacesmall](https://developer.apple.com/documentation/appkit/nstouchbaritem/identifier-swift.struct/fixedspacesmall)

# fixedSpaceSmall (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item appropriate for use as a small space in a Touch Bar.

## Declaration

```swift
static let fixedSpaceSmall: NSTouchBarItem.Identifier
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array on an [NSTouchBar](../../nstouchbar.md) object and the system will instantiate the item for you.

## See Also

### Creating identifiers for space items

- [fixedSpaceLarge](fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.
- [flexibleSpace](flexiblespace.md): The identifier of an item appropriate for use as a flexible space in a Touch Bar.

# NSTouchBarItemIdentifierFixedSpaceSmall (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item appropriate for use as a small space in a Touch Bar.

## Declaration

```objectivec
extern NSTouchBarItemIdentifier const NSTouchBarItemIdentifierFixedSpaceSmall;
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array on an [NSTouchBar](../../nstouchbar.md) object and the system will instantiate the item for you.

## See Also

### Creating identifiers for space items

- [NSTouchBarItemIdentifierFixedSpaceLarge](fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.
- [NSTouchBarItemIdentifierFlexibleSpace](flexiblespace.md): The identifier of an item appropriate for use as a flexible space in a Touch Bar.
