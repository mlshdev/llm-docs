> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/removeobjects(forkeys:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/removeobjects(forkeys:))

# removeObjects(forKeys:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the dictionary entries specified by elements in a given array.

## Declaration

```swift
func removeObjects(forKeys keyArray: [Any])
```

## Parameters

- `keyArray`: An array of objects specifying the keys to remove.

<a id="Discussion"></a>

## Discussion

If a key in `keyArray` does not exist, the entry is ignored.

## See Also

### Removing Entries From a Mutable Dictionary

- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the dictionary of its entries.

# removeObjectsForKeys: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the dictionary entries specified by elements in a given array.

## Declaration

```objectivec
- (void) removeObjectsForKeys:(NSArray<id> *) keyArray;
```

## Parameters

- `keyArray`: An array of objects specifying the keys to remove.

<a id="Discussion"></a>

## Discussion

If a key in `keyArray` does not exist, the entry is ignored.

## See Also

### Removing Entries From a Mutable Dictionary

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [removeAllObjects](removeallobjects%28%29.md): Empties the dictionary of its entries.
