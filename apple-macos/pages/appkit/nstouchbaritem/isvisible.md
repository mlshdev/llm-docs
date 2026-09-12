> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/isvisible](https://developer.apple.com/documentation/appkit/nstouchbaritem/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that reflects whether or not the item is visible.

## Declaration

```swift
var isVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), this item is shown in a currently visible bar. This property is always [false](https://developer.apple.com/documentation/swift/false) for spaces, proxy items, and groups.

This property is key-value observable.

## See Also

### Managing item visibility

- [visibilityPriority](visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [NSTouchBarItem.Priority](priority.md): Priorities for the visibility of a Touch Bar item.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that reflects whether or not the item is visible.

## Declaration

```objectivec
@property (readonly, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), this item is shown in a currently visible bar. This property is always [false](https://developer.apple.com/documentation/swift/false) for spaces, proxy items, and groups.

This property is key-value observable.

## See Also

### Managing item visibility

- [visibilityPriority](visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [NSTouchBarItemPriority](priority.md): Priorities for the visibility of a Touch Bar item.
