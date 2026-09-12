> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemvisibilitypriority/init(lowerthan:)](https://developer.apple.com/documentation/swiftui/toolbaritemvisibilitypriority/init(lowerthan:))

# init(lowerThan:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a priority lower than the specified value.

## Declaration

```swift
init(lowerThan other: ToolbarItemVisibilityPriority)
```

<a id="discussion"></a>

## Discussion

The priority is lower than `other` but doesn’t cross below the next lower system priority. For example, `ToolbarItemVisibilityPriority(lowerThan: .high)` returns a value that is less than `.high` but greater than `.automatic`.

Priorities created with the same base value are equal:

```swift
let x = ToolbarItemVisibilityPriority(lowerThan: .high)
let y = ToolbarItemVisibilityPriority(lowerThan: .high)
x == y // true
```

## See Also

### Creating custom priorities

- [init(higherThan:)](init%28higherthan_%29.md): Creates a priority higher than the specified value.
