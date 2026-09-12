> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/count](https://developer.apple.com/documentation/swift/string/count)

# count

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of characters in a string.

## Declaration

```swift
var count: Int { get }
```

<a id="discussion"></a>

## Discussion

To check whether a string is empty, use its `isEmpty` property instead of comparing `count` to zero.

> **Complexity**

> O(n), where n is the length of the string.

## See Also

### Inspecting a String

- [isEmpty](isempty.md): A Boolean value indicating whether a string has no characters.
