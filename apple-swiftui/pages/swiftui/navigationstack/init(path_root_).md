> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationstack/init(path:root:)](https://developer.apple.com/documentation/swiftui/navigationstack/init(path:root:))

# init(path:root:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a navigation stack with homogeneous navigation state that you can control.

## Declaration

```swift
nonisolated init(path: Binding<Data>, @ContentBuilder root: () -> Root) where Data : MutableCollection, Data : RandomAccessCollection, Data : RangeReplaceableCollection, Data.Element : Hashable
```

## Parameters

- `path`: A [Binding](../binding.md) to the navigation state for this stack.
- `root`: The view to display when the stack is empty.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)
- [Migrating to new navigation types](../migrating-to-new-navigation-types.md)

<a id="discussion"></a>

## Discussion

If you don’t need access to the navigation state, use [init(root:)](init%28root_%29.md).
