> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/data(forkey:)](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/data(forkey:))

# data(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the data object associated with the specified key.

## Declaration

```swift
func data(forKey aKey: String) -> Data?
```

## Parameters

- `aKey`: The key to retrieve from the iCloud key-value store.

<a id="return-value"></a>

## Return Value

The data object associated with `aKey`, or `nil` if the key isn’t present. This method also returns `nil` if the retrieved value isn’t a data object.

## See Also

### Getting values

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLong(forKey:)](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [string(forKey:)](string%28forkey_%29.md): Returns the string associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.

# dataForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the data object associated with the specified key.

## Declaration

```objectivec
- (NSData *) dataForKey:(NSString *) aKey;
```

## Parameters

- `aKey`: The key to retrieve from the iCloud key-value store.

<a id="return-value"></a>

## Return Value

The data object associated with `aKey`, or `nil` if the key isn’t present. This method also returns `nil` if the retrieved value isn’t a data object.

## See Also

### Getting values

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLongForKey:](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [stringForKey:](string%28forkey_%29.md): Returns the string associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.
