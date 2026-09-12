> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/visibilitypriority](https://developer.apple.com/documentation/appkit/nstouchbaritem/visibilitypriority)

# visibilityPriority (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Determines which items are shown in a bar when space is limited.

## Declaration

```swift
var visibilityPriority: NSTouchBarItem.Priority { get set }
```

<a id="Discussion"></a>

## Discussion

The bar hides items of lower priority when there is not enough space to show all items. Use this property to specify the relative priority of the items in your bar.

## See Also

### Managing item visibility

- [NSTouchBarItem.Priority](priority.md): Priorities for the visibility of a Touch Bar item.
- [isVisible](isvisible.md): A Boolean value that reflects whether or not the item is visible.

# visibilityPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Determines which items are shown in a bar when space is limited.

## Declaration

```objectivec
@property NSTouchBarItemPriority visibilityPriority;
```

<a id="Discussion"></a>

## Discussion

The bar hides items of lower priority when there is not enough space to show all items. Use this property to specify the relative priority of the items in your bar.

## See Also

### Managing item visibility

- [NSTouchBarItemPriority](priority.md): Priorities for the visibility of a Touch Bar item.
- [visible](isvisible.md): A Boolean value that reflects whether or not the item is visible.
