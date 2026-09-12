> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/hashvalue](https://developer.apple.com/documentation/swift/task/hashvalue)

# hashValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The hash value.

## Declaration

```swift
var hashValue: Int { get }
```

<a id="discussion"></a>

## Discussion

Hash values are not guaranteed to be equal across different executions of your program. Do not save hash values to use during a future execution.

> **Important**

> `hashValue` is deprecated as a `Hashable` requirement. To conform to `Hashable`, implement the `hash(into:)` requirement instead. The compiler provides an implementation for `hashValue` for you.

## See Also

### Comparing Tasks

- [==(\_:\_:)](==%28____%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Returns a Boolean value indicating whether two values are equal.
- [!=(\_:\_:)](!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [hash(into:)](hash%28into_%29.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. Hashes the essential components of this value by feeding them into the given hasher.
