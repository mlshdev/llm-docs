> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/identifier-swift.struct/otheritemsproxy](https://developer.apple.com/documentation/appkit/nstouchbaritem/identifier-swift.struct/otheritemsproxy)

# otherItemsProxy (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of the special “other items proxy”, which is used to nest bars up the responder chain.

## Declaration

```swift
static let otherItemsProxy: NSTouchBarItem.Identifier
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array of an [NSTouchBar](../../nstouchbar.md) object, and a special proxy item will be instantiated for you.

When the [NSTouchBar](../../nstouchbar.md) containing this item is visible, bars provided by objects closer to the first responder will be nested inside the space denoted for this item.Note that a touch bar lacking this item identifier will be replaced in its entirety by touch bars closer to the first responder in the responder chain.

# NSTouchBarItemIdentifierOtherItemsProxy (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The identifier of the special “other items proxy”, which is used to nest bars up the responder chain.

## Declaration

```objectivec
extern NSTouchBarItemIdentifier const NSTouchBarItemIdentifierOtherItemsProxy;
```

<a id="Discussion"></a>

## Discussion

Use this identifier in the [itemIdentifiers](../../nstouchbar/itemidentifiers.md) array of an [NSTouchBar](../../nstouchbar.md) object, and a special proxy item will be instantiated for you.

When the [NSTouchBar](../../nstouchbar.md) containing this item is visible, bars provided by objects closer to the first responder will be nested inside the space denoted for this item.Note that a touch bar lacking this item identifier will be replaced in its entirety by touch bars closer to the first responder in the responder chain.
