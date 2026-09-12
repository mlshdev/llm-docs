> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-3ga7z](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/set(_:forkey:)-3ga7z)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to a data object.

## Declaration

```swift
func set(_ aData: Data?, forKey aKey: String)
```

## Parameters

- `aData`: The data object to save to the iCloud key-value store.
- `aKey`: The key to associate with the value.

<a id="discussion"></a>

## Discussion

To store types that aren’t property list objects, archive them to an [NSData](../nsdata.md) object first and add that object to the store using this method. Exercise caution when saving custom objects to iCloud. Instances of your app on a person’s other devices must also be able to extract the objects and use them. Design your objects to be portable, and design new versions of your app to support previous versions of your custom types.

## See Also

### Setting values

- [set(\_:forKey:)](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [set(\_:forKey:)](set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [set(\_:forKey:)](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [set(\_:forKey:)](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [set(\_:forKey:)](set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [set(\_:forKey:)](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.

# setData:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the value of the specified key to a data object.

## Declaration

```objectivec
- (void) setData:(NSData *) aData forKey:(NSString *) aKey;
```

## Parameters

- `aData`: The data object to save to the iCloud key-value store.
- `aKey`: The key to associate with the value.

<a id="discussion"></a>

## Discussion

To store types that aren’t property list objects, archive them to an [NSData](../nsdata.md) object first and add that object to the store using this method. Exercise caution when saving custom objects to iCloud. Instances of your app on a person’s other devices must also be able to extract the objects and use them. Design your objects to be portable, and design new versions of your app to support previous versions of your custom types.

## See Also

### Setting values

- [setBool:forKey:](set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [setDouble:forKey:](set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [setLongLong:forKey:](set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [setString:forKey:](set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [setObject:forKey:](set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [setArray:forKey:](set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [setDictionary:forKey:](set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.
