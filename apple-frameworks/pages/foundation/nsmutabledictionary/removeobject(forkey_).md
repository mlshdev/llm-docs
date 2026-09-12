> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/removeobject(forkey:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/removeobject(forkey:))

# removeObject(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given key and its associated value from the dictionary.

## Declaration

```swift
func removeObject(forKey aKey: Any)
```

## Parameters

- `aKey`: The key to remove.

  > **Important**

  >  Raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `aKey` is `nil`.

<a id="Discussion"></a>

## Discussion

Does nothing if `aKey` does not exist.

For example, assume you have an archived dictionary that records the call letters and associated frequencies of radio stations. To remove an entry for a defunct station, you could write code similar to the following:

```objc
NSMutableDictionary *stations = nil;
 
stations = [[NSMutableDictionary alloc]
        initWithContentsOfFile: pathToArchive];
[stations removeObjectForKey:@"KIKT"];
```

## See Also

### Removing Entries From a Mutable Dictionary

- [removeAllObjects()](removeallobjects%28%29.md): Empties the dictionary of its entries.
- [removeObjects(forKeys:)](removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.

# removeObjectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given key and its associated value from the dictionary.

## Declaration

```objectivec
- (void) removeObjectForKey:(KeyType) aKey;
```

## Parameters

- `aKey`: The key to remove.

  > **Important**

  >  Raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `aKey` is `nil`.

<a id="Discussion"></a>

## Discussion

Does nothing if `aKey` does not exist.

For example, assume you have an archived dictionary that records the call letters and associated frequencies of radio stations. To remove an entry for a defunct station, you could write code similar to the following:

```objc
NSMutableDictionary *stations = nil;
 
stations = [[NSMutableDictionary alloc]
        initWithContentsOfFile: pathToArchive];
[stations removeObjectForKey:@"KIKT"];
```

## See Also

### Removing Entries From a Mutable Dictionary

- [removeAllObjects](removeallobjects%28%29.md): Empties the dictionary of its entries.
- [removeObjectsForKeys:](removeobjects%28forkeys_%29.md): Removes from the dictionary entries specified by elements in a given array.
