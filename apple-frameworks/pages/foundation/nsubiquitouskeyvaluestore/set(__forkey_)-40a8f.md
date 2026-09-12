> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-40a8f](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-40a8f)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to an array of property list objects.

## Declaration

```swift
func set(_ anArray: [Any]?, forKey aKey: String)
```

## Parameters

- `anArray`: The array object to save in the iCloud key-value store. The array must contain only property list types.
- `aKey`: The key to associate with the value.

## See Also

### Setting values

- [set(\_:forKey:)](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [set(\_:forKey:)](set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [set(\_:forKey:)](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [set(\_:forKey:)](set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [set(\_:forKey:)](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [set(\_:forKey:)](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.

# setArray:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to an array of property list objects.

## Declaration

```objectivec
- (void) setArray:(NSArray *) anArray forKey:(NSString *) aKey;
```

## Parameters

- `anArray`: The array object to save in the iCloud key-value store. The array must contain only property list types.
- `aKey`: The key to associate with the value.

## See Also

### Setting values

- [setBool:forKey:](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [setDouble:forKey:](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [setLongLong:forKey:](set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [setString:forKey:](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [setData:forKey:](set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [setObject:forKey:](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [setDictionary:forKey:](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.
