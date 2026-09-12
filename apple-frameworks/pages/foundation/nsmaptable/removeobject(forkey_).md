> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/removeobject(forkey:)](https://developer.apple.com/documentation/foundation/nsmaptable/removeobject(forkey:))

# removeObject(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given key and its associated value from the map table.

## Declaration

```swift
func removeObject(forKey aKey: KeyType?)
```

## Parameters

- `aKey`: The key to remove.

<a id="Discussion"></a>

## Discussion

Does nothing if `aKey` does not exist.

## See Also

### Manipulating Content

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Adds a given key-value pair to the map table.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the map table of its entries.

# removeObjectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given key and its associated value from the map table.

## Declaration

```objectivec
- (void) removeObjectForKey:(KeyType) aKey;
```

## Parameters

- `aKey`: The key to remove.

<a id="Discussion"></a>

## Discussion

Does nothing if `aKey` does not exist.

## See Also

### Manipulating Content

- [setObject:forKey:](setobject%28__forkey_%29.md): Adds a given key-value pair to the map table.
- [removeAllObjects](removeallobjects%28%29.md): Empties the map table of its entries.
