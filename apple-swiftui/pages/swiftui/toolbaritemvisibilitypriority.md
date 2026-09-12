> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemvisibilitypriority](https://developer.apple.com/documentation/swiftui/toolbaritemvisibilitypriority)

# ToolbarItemVisibilityPriority

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.1+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that defines the visibility priority of a toolbar item.

## Declaration

```swift
struct ToolbarItemVisibilityPriority
```

<a id="overview"></a>

## Overview

When a toolbar runs out of space, it moves items into an overflow menu. Visibility priority controls the order in which that happens: items with a lower priority move first, keeping higher-priority items visible longer as the window shrinks.

Use values of this type with the [visibilityPriority(\_:)](toolbarcontent/visibilitypriority%28__%29.md) modifier. For example, to keep a share button visible longer than an archive button:

```swift
struct RootView: View {
    var body: some View {
        ContentView()
            .toolbar {
                ToolbarItem {
                    SecondaryControl()
                }
                ToolbarItem {
                    PrimaryControl()
                }
                .visibilityPriority(.high)
            }
    }
}
```

## Topics

### Getting system priorities

- [automatic](toolbaritemvisibilitypriority/automatic.md): The default priority that lets the system determine the item’s visibility in the toolbar.
- [low](toolbaritemvisibilitypriority/low.md): A priority that moves the item to the overflow menu before items with the default or high priority.
- [high](toolbaritemvisibilitypriority/high.md): A priority that keeps the item in the toolbar longer than items with the default or low priority.

### Creating custom priorities

- [init(lowerThan:)](toolbaritemvisibilitypriority/init%28lowerthan_%29.md): Creates a priority lower than the specified value.
- [init(higherThan:)](toolbaritemvisibilitypriority/init%28higherthan_%29.md): Creates a priority higher than the specified value.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling item visibility

- [visibilityPriority(\_:)](toolbarcontent/visibilitypriority%28__%29.md): Defines the visibility priority for a toolbar item.
