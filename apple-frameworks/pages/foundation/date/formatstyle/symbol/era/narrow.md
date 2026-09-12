> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/symbol/era/narrow](https://developer.apple.com/documentation/foundation/date/formatstyle/symbol/era/narrow)

# narrow

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A narrow representation of an era.

## Declaration

```swift
static var narrow: Date.FormatStyle.Symbol.Era { get }
```

<a id="Discussion"></a>

## Discussion

A custom format style conveying the shortest representation of an era. For example, `B` (*before Christ*) and `A` (*anno Domini*).

## See Also

### Modifying an Era

- [abbreviated](abbreviated.md): An abbreviated representation of an era.
- [wide](wide.md): A full representation of an era.
