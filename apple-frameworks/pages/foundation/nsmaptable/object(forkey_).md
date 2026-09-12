> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/object(forkey:)](https://developer.apple.com/documentation/foundation/nsmaptable/object(forkey:))

# object(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a the value associated with a given key.

## Declaration

```swift
func object(forKey aKey: KeyType?) -> ObjectType?
```

## Parameters

- `aKey`: The key for which to return the corresponding value.

<a id="return-value"></a>

## Return Value

The value associated with `aKey`, or `nil` if no value is associated with `aKey`.

## See Also

### Accessing Content

- [keyEnumerator()](keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the map table.
- [count](count.md): The number of key-value pairs in the map table.

# objectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a the value associated with a given key.

## Declaration

```objectivec
- (ObjectType) objectForKey:(KeyType) aKey;
```

## Parameters

- `aKey`: The key for which to return the corresponding value.

<a id="return-value"></a>

## Return Value

The value associated with `aKey`, or `nil` if no value is associated with `aKey`.

## See Also

### Accessing Content

- [keyEnumerator](keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the map table.
- [count](count.md): The number of key-value pairs in the map table.
