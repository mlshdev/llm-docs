> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/init(_:)-7qf91](https://developer.apple.com/documentation/foundation/nssortdescriptor/init(_:)-7qf91)

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 8.0+ (deprecated in 10.0)

Creates a sort descriptor using a sort descriptor you specify.

> Use \`init(\_:) where Compared: NSObject\` instead. Attempt to convert SortDescriptor with Compared being non-NSObject will result in a fatalError at runtime.

## Declaration

```swift
convenience init<Compared>(_ sortDescriptor: SortDescriptor<Compared>)
```

## Parameters

- `sortDescriptor`: A sort descriptor.

## See Also

### Creating a Sort Descriptor

- [init(key:ascending:)](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [init(key:ascending:selector:)](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [init(keyPath:ascending:)](init%28keypath_ascending_%29.md): Creates a sort descriptor with a specified key path and ordering.
- [init(key:ascending:comparator:)](init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [init(keyPath:ascending:comparator:)](init%28keypath_ascending_comparator_%29.md): Creates a sort descriptor with a specified key path and ordering, and a comparator block.
- [init(coder:)](init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
