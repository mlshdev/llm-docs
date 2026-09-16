> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritemvisibilitypriority/init(higherthan:)

# init(higherThan:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a priority higher than the specified value.

## Declaration

```swift
init(higherThan other: ToolbarItemVisibilityPriority)
```

<a id="discussion"></a>

## Discussion

The priority is higher than `other` but doesn’t cross above the next higher system priority. For example, `ToolbarItemVisibilityPriority(higherThan: .high)` returns a value that is greater than `.high`.

Priorities created with the same base value are equal:

```swift
let x = ToolbarItemVisibilityPriority(higherThan: .high)
let y = ToolbarItemVisibilityPriority(higherThan: .high)
x == y // true
```

## See Also

### Creating custom priorities

- [init(lowerThan:)](init%28lowerthan_%29.md): Creates a priority lower than the specified value.
