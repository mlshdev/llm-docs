> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/init(keypath:ascending:comparator:)](https://developer.apple.com/documentation/foundation/nssortdescriptor/init(keypath:ascending:comparator:))

# init(keyPath:ascending:comparator:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor with a specified key path and ordering, and a comparator block.

## Declaration

```swift
convenience init<Root, Value>(keyPath: KeyPath<Root, Value>, ascending: Bool, comparator cmptr: @escaping Comparator)
```

## Parameters

- `keyPath`: The key path to the property to compare.
- `ascending`: If `true`, the sort descriptor compares using the [SortOrder.forward](../sortorder/forward.md) sort order; otherwise, it uses [SortOrder.reverse](../sortorder/reverse.md).
- `cmptr`: A comparator block.

## See Also

### Creating a Sort Descriptor

- [init(key:ascending:)](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [init(key:ascending:selector:)](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [init(keyPath:ascending:)](init%28keypath_ascending_%29.md): Creates a sort descriptor with a specified key path and ordering.
- [init(key:ascending:comparator:)](init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [init(coder:)](init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
- [init(\_:)](init%28__%29-7qf91.md): Deprecated. Creates a sort descriptor using a sort descriptor you specify.
