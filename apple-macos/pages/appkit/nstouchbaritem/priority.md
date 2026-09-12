> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/priority](https://developer.apple.com/documentation/appkit/nstouchbaritem/priority)

# NSTouchBarItem.Priority (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Priorities for the visibility of a Touch Bar item.

## Declaration

```swift
struct Priority
```

<a id="Discussion"></a>

## Discussion

Use these constants to set the [visibilityPriority](visibilitypriority.md) property of an [NSTouchBarItem](../nstouchbaritem.md) instance. The Touch Bar hides items of lower priority when there isn’t enough space to show all items.

## Topics

### Priorities

- [low](priority/low.md): A constant indicating a low visibility priority.
- [normal](priority/normal.md): A constant indicating a normal visibility priority.
- [high](priority/high.md): A constant indicating a high visibility priority.

### Initializers

- [init(\_:)](priority/init%28__%29.md): Creates a new priority structure from the given value.
- [init(rawValue:)](priority/init%28rawvalue_%29.md): Creates a new priority structure from the given raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing item visibility

- [visibilityPriority](visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [isVisible](isvisible.md): A Boolean value that reflects whether or not the item is visible.

# NSTouchBarItemPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Priorities for the visibility of a Touch Bar item.

## Declaration

```objectivec
typedef float NSTouchBarItemPriority;
```

<a id="Discussion"></a>

## Discussion

Use these constants to set the [visibilityPriority](visibilitypriority.md) property of an [NSTouchBarItem](../nstouchbaritem.md) instance. The Touch Bar hides items of lower priority when there isn’t enough space to show all items.

## Topics

### Priorities

- [NSTouchBarItemPriorityLow](priority/low.md): A constant indicating a low visibility priority.
- [NSTouchBarItemPriorityNormal](priority/normal.md): A constant indicating a normal visibility priority.
- [NSTouchBarItemPriorityHigh](priority/high.md): A constant indicating a high visibility priority.

## See Also

### Managing item visibility

- [visibilityPriority](visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [visible](isvisible.md): A Boolean value that reflects whether or not the item is visible.
