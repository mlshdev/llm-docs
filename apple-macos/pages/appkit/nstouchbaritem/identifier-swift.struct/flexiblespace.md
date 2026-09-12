> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/identifier-swift.struct/flexiblespace](https://developer.apple.com/documentation/appkit/nstouchbaritem/identifier-swift.struct/flexiblespace)

# flexibleSpace (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item appropriate for use as a flexible space in a Touch Bar.

## Declaration

```swift
static let flexibleSpace: NSTouchBarItem.Identifier
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array on an [NSTouchBar](../../nstouchbar.md) object and the system will instantiate the item for you.

## See Also

### Creating identifiers for space items

- [fixedSpaceSmall](fixedspacesmall.md): The identifier of an item appropriate for use as a small space in a Touch Bar.
- [fixedSpaceLarge](fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.

# NSTouchBarItemIdentifierFlexibleSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of an item appropriate for use as a flexible space in a Touch Bar.

## Declaration

```objectivec
extern NSTouchBarItemIdentifier const NSTouchBarItemIdentifierFlexibleSpace;
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array on an [NSTouchBar](../../nstouchbar.md) object and the system will instantiate the item for you.

## See Also

### Creating identifiers for space items

- [NSTouchBarItemIdentifierFixedSpaceSmall](fixedspacesmall.md): The identifier of an item appropriate for use as a small space in a Touch Bar.
- [NSTouchBarItemIdentifierFixedSpaceLarge](fixedspacelarge.md): The identifier of an item appropriate for use as a large space in a Touch Bar.
