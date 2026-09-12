> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/setobject(_:forkey:)](https://developer.apple.com/documentation/foundation/nsmaptable/setobject(_:forkey:))

# setObject(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the map table.

## Declaration

```swift
func setObject(_ anObject: ObjectType?, forKey aKey: KeyType?)
```

## Parameters

- `anObject`: The value for `aKey`.
- `aKey`: The key for `anObject`.

## See Also

### Manipulating Content

- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes a given key and its associated value from the map table.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the map table of its entries.

# setObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the map table.

## Declaration

```objectivec
- (void) setObject:(ObjectType) anObject forKey:(KeyType) aKey;
```

## Parameters

- `anObject`: The value for `aKey`.
- `aKey`: The key for `anObject`.

## See Also

### Manipulating Content

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes a given key and its associated value from the map table.
- [removeAllObjects](removeallobjects%28%29.md): Empties the map table of its entries.
