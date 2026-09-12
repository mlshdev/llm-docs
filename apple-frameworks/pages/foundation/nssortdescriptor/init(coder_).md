> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/init(coder:)](https://developer.apple.com/documentation/foundation/nssortdescriptor/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor by decoding from the coder you specify.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating a Sort Descriptor

- [init(key:ascending:)](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [init(key:ascending:selector:)](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [init(keyPath:ascending:)](init%28keypath_ascending_%29.md): Creates a sort descriptor with a specified key path and ordering.
- [init(key:ascending:comparator:)](init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [init(keyPath:ascending:comparator:)](init%28keypath_ascending_comparator_%29.md): Creates a sort descriptor with a specified key path and ordering, and a comparator block.
- [init(\_:)](init%28__%29-7qf91.md): Deprecated. Creates a sort descriptor using a sort descriptor you specify.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor by decoding from the coder you specify.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating a Sort Descriptor

- [sortDescriptorWithKey:ascending:](sortdescriptorwithkey_ascending_.md): Creates and returns a sort descriptor with the specified key path and ordering.
- [initWithKey:ascending:](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [sortDescriptorWithKey:ascending:selector:](sortdescriptorwithkey_ascending_selector_.md): Creates a sort descriptor with the specified key path, ordering, and comparison selector.
- [initWithKey:ascending:selector:](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [sortDescriptorWithKey:ascending:comparator:](sortdescriptorwithkey_ascending_comparator_.md): Creates and returns a sort descriptor initialized with the specified key path and ordering, and a comparator block.
- [initWithKey:ascending:comparator:](init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
