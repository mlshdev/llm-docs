> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/init(options:capacity:)](https://developer.apple.com/documentation/foundation/nshashtable/init(options:capacity:))

# init(options:capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table initialized with the given attributes.

## Declaration

```swift
init(options: NSPointerFunctions.Options = [], capacity initialCapacity: Int)
```

## Parameters

- `options`: A bit field that specifies the options for the elements in the hash table. For possible values, see [NSHashTableOptions](../nshashtableoptions.md).
- `initialCapacity`: The initial number of elements the hash table can hold.

<a id="return-value"></a>

## Return Value

A hash table initialized with options specified by `options` and initial capacity of `capacity`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Initialization

- [init(pointerFunctions:capacity:)](init%28pointerfunctions_capacity_%29.md): Returns a hash table initialized with the given functions and capacity.

# initWithOptions:capacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table initialized with the given attributes.

## Declaration

```objectivec
- (instancetype) initWithOptions:(NSPointerFunctionsOptions) options capacity:(NSUInteger) initialCapacity;
```

## Parameters

- `options`: A bit field that specifies the options for the elements in the hash table. For possible values, see [NSHashTableOptions](../nshashtableoptions.md).
- `initialCapacity`: The initial number of elements the hash table can hold.

<a id="return-value"></a>

## Return Value

A hash table initialized with options specified by `options` and initial capacity of `capacity`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Initialization

- [initWithPointerFunctions:capacity:](init%28pointerfunctions_capacity_%29.md): Returns a hash table initialized with the given functions and capacity.
