> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationpath/removelast(_:)](https://developer.apple.com/documentation/swiftui/navigationpath/removelast(_:))

# removeLast(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Removes values from the end of this path.

## Declaration

```swift
mutating func removeLast(_ k: Int = 1)
```

## Parameters

- `k`: The number of values to remove. The default value is `1`.

<a id="discussion"></a>

## Discussion

> **Precondition**

> The input parameter `k` must be greater than or equal to zero, and must be less than or equal to the number of elements in the path.

## See Also

### Managing path contents

- [isEmpty](isempty.md): A Boolean that indicates whether this path is empty.
- [count](count.md): The number of elements in this path.
- [append(\_:)](append%28__%29.md): Appends a new codable value to the end of this path.
