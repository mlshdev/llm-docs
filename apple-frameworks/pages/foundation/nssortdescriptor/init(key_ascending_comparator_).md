> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/init(key:ascending:comparator:)](https://developer.apple.com/documentation/foundation/nssortdescriptor/init(key:ascending:comparator:))

# init(key:ascending:comparator:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor with a specified string key path and ordering, and a comparator block.

## Declaration

```swift
init(key: String?, ascending: Bool, comparator cmptr: @escaping Comparator)
```

## Parameters

- `key`: The property key for performing a comparison.

  For information about key paths, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).
- `ascending`: [true](https://developer.apple.com/documentation/swift/true) if the receiver specifies sorting in ascending order; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

A sort descriptor that initializes with the specified key, ordering, and comparator.

## See Also

### Creating a Sort Descriptor

- [init(key:ascending:)](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [init(key:ascending:selector:)](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [init(keyPath:ascending:)](init%28keypath_ascending_%29.md): Creates a sort descriptor with a specified key path and ordering.
- [init(keyPath:ascending:comparator:)](init%28keypath_ascending_comparator_%29.md): Creates a sort descriptor with a specified key path and ordering, and a comparator block.
- [init(coder:)](init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
- [init(\_:)](init%28__%29-7qf91.md): Deprecated. Creates a sort descriptor using a sort descriptor you specify.

# initWithKey:ascending:comparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor with a specified string key path and ordering, and a comparator block.

## Declaration

```objectivec
- (instancetype) initWithKey:(NSString *) key ascending:(BOOL) ascending comparator:(NSComparator) cmptr;
```

## Parameters

- `key`: The property key for performing a comparison.

  For information about key paths, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).
- `ascending`: [true](https://developer.apple.com/documentation/swift/true) if the receiver specifies sorting in ascending order; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

A sort descriptor that initializes with the specified key, ordering, and comparator.

## See Also

### Creating a Sort Descriptor

- [sortDescriptorWithKey:ascending:](sortdescriptorwithkey_ascending_.md): Creates and returns a sort descriptor with the specified key path and ordering.
- [initWithKey:ascending:](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [sortDescriptorWithKey:ascending:selector:](sortdescriptorwithkey_ascending_selector_.md): Creates a sort descriptor with the specified key path, ordering, and comparison selector.
- [initWithKey:ascending:selector:](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [sortDescriptorWithKey:ascending:comparator:](sortdescriptorwithkey_ascending_comparator_.md): Creates and returns a sort descriptor initialized with the specified key path and ordering, and a comparator block.
- [initWithCoder:](init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
