> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/dictionaryrepresentation](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/dictionaryrepresentation)

# dictionaryRepresentation (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary with all of the key-value pairs in the iCloud key-value store.

## Declaration

```swift
var dictionaryRepresentation: [String : Any] { get }
```

<a id="discussion"></a>

## Discussion

Getting this property retrieves the in-memory copy of the keys and values. If changes to the keys and values are pending, the system fetches those changes from iCloud and updates the dictionary before returning it. To ensure the dictionary contains all recent changes, call [synchronize()](synchronize%28%29.md) shortly before accessing this property. All of the values in the dictionary are property list object types.

## See Also

### Getting values

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLong(forKey:)](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [string(forKey:)](string%28forkey_%29.md): Returns the string associated with the specified key.
- [data(forKey:)](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.

# dictionaryRepresentation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary with all of the key-value pairs in the iCloud key-value store.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * dictionaryRepresentation;
```

<a id="discussion"></a>

## Discussion

Getting this property retrieves the in-memory copy of the keys and values. If changes to the keys and values are pending, the system fetches those changes from iCloud and updates the dictionary before returning it. To ensure the dictionary contains all recent changes, call [synchronize](synchronize%28%29.md) shortly before accessing this property. All of the values in the dictionary are property list object types.

## See Also

### Getting values

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLongForKey:](longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [stringForKey:](string%28forkey_%29.md): Returns the string associated with the specified key.
- [dataForKey:](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
