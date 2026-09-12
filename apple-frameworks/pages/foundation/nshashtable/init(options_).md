> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/init(options:)](https://developer.apple.com/documentation/foundation/nshashtable/init(options:))

# init(options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table with given pointer functions options.

## Declaration

```swift
init(options: NSPointerFunctions.Options = [])
```

## Parameters

- `options`: A bit field that specifies the options for the elements in the hash table. For possible values, see [NSHashTableOptions](../nshashtableoptions.md).

<a id="return-value"></a>

## Return Value

A hash table with given pointer functions options.

## See Also

### Convenience Constructors

- [weakObjects()](weakobjects%28%29.md): Returns a new hash table for storing weak references to its contents.

# hashTableWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table with given pointer functions options.

## Declaration

```objectivec
+ (NSHashTable<id> *) hashTableWithOptions:(NSPointerFunctionsOptions) options;
```

## Parameters

- `options`: A bit field that specifies the options for the elements in the hash table. For possible values, see [NSHashTableOptions](../nshashtableoptions.md).

<a id="return-value"></a>

## Return Value

A hash table with given pointer functions options.

## See Also

### Convenience Constructors

- [weakObjectsHashTable](weakobjects%28%29.md): Returns a new hash table for storing weak references to its contents.
