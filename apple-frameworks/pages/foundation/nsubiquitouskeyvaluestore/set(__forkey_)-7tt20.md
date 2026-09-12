> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-7tt20](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-7tt20)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to a 64-bit integer value.

## Declaration

```swift
func set(_ value: Int64, forKey aKey: String)
```

## Parameters

- `value`: The integer value to save to the iCloud key-value store.
- `aKey`: The key to associate with the value.

<a id="discussion"></a>

## Discussion

This method places the integer value in an [NSNumber](../nsnumber.md) type before writing the key and value to the store.

## See Also

### Setting values

- [set(\_:forKey:)](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [set(\_:forKey:)](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [set(\_:forKey:)](set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [set(\_:forKey:)](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [set(\_:forKey:)](set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [set(\_:forKey:)](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.

# setLongLong:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to a 64-bit integer value.

## Declaration

```objectivec
- (void) setLongLong:(long long) value forKey:(NSString *) aKey;
```

## Parameters

- `value`: The integer value to save to the iCloud key-value store.
- `aKey`: The key to associate with the value.

<a id="discussion"></a>

## Discussion

This method places the integer value in an [NSNumber](../nsnumber.md) type before writing the key and value to the store.

## See Also

### Setting values

- [setBool:forKey:](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [setDouble:forKey:](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [setString:forKey:](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [setData:forKey:](set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [setObject:forKey:](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [setArray:forKey:](set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [setDictionary:forKey:](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.
