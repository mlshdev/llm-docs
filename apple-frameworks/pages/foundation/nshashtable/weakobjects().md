> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/weakobjects()](https://developer.apple.com/documentation/foundation/nshashtable/weakobjects())

# weakObjects() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new hash table for storing weak references to its contents.

## Declaration

```swift
class func weakObjects() -> NSHashTable<ObjectType>
```

<a id="return-value"></a>

## Return Value

A new hash table that uses the [weakMemory](../nspointerfunctions/options/weakmemory.md) options and [objectPersonality](../nspointerfunctions/options/objectpersonality.md) and has an initial capacity of `0`.

## See Also

### Convenience Constructors

- [init(options:)](init%28options_%29.md): Returns a hash table with given pointer functions options.

# weakObjectsHashTable (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new hash table for storing weak references to its contents.

## Declaration

```objectivec
+ (NSHashTable<id> *) weakObjectsHashTable;
```

<a id="return-value"></a>

## Return Value

A new hash table that uses the [NSPointerFunctionsWeakMemory](../nspointerfunctions/options/weakmemory.md) options and [NSPointerFunctionsObjectPersonality](../nspointerfunctions/options/objectpersonality.md) and has an initial capacity of `0`.

## See Also

### Convenience Constructors

- [hashTableWithOptions:](init%28options_%29.md): Returns a hash table with given pointer functions options.
