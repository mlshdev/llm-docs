> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/string(forkey:)](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/string(forkey:))

# string(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the string associated with the specified key.

## Declaration

```swift
func string(forKey aKey: String) -> String?
```

## Parameters

- `aKey`: The key to retrieve from the iCloud key-value store.

<a id="return-value"></a>

## Return Value

The string associated with `aKey`, or `nil` if the key isn’t present.

<a id="discussion"></a>

## Discussion

This method automatically coerces certain types to equivalent strings. For example, it converts the integer `123` to the string “123”. If the key is present, but the method can’t use it to create an appropriate string, this method returns `nil`.

## See Also

### Getting values

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLong(forKey:)](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [data(forKey:)](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.

# stringForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the string associated with the specified key.

## Declaration

```objectivec
- (NSString *) stringForKey:(NSString *) aKey;
```

## Parameters

- `aKey`: The key to retrieve from the iCloud key-value store.

<a id="return-value"></a>

## Return Value

The string associated with `aKey`, or `nil` if the key isn’t present.

<a id="discussion"></a>

## Discussion

This method automatically coerces certain types to equivalent strings. For example, it converts the integer `123` to the string “123”. If the key is present, but the method can’t use it to create an appropriate string, this method returns `nil`.

## See Also

### Getting values

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLongForKey:](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [dataForKey:](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.
