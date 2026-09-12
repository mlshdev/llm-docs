> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/set(_:forkey:)-8ab6d](https://developer.apple.com/documentation/foundation/userdefaults/set(_:forkey:)-8ab6d)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a property list object.

## Declaration

```swift
func set(_ value: Any?, forKey defaultName: String)
```

## Parameters

- `value`: The property-list type to store in the defaults database. If you specify an array or dictionary type, those collections must similarly contain only property list types.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

Use this method to write property list object types to the defaults store. To store types that aren’t property list objects, archive them to a [Data](../data.md) object and use this method to save that data object to the defaults store.

After you call this method, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [set(\_:forKey:)](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [set(\_:forKey:)](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [set(\_:forKey:)](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [set(\_:forKey:)](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.

# setObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a property list object.

## Declaration

```objectivec
- (void) setObject:(id) value forKey:(NSString *) defaultName;
```

## Parameters

- `value`: The property-list type to store in the defaults database. If you specify an array or dictionary type, those collections must similarly contain only property list types.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

Use this method to write property list object types to the defaults store. To store types that aren’t property list objects, archive them to a [Data](../data.md) object and use this method to save that data object to the defaults store.

After you call this method, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [setBool:forKey:](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [setInteger:forKey:](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [setFloat:forKey:](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [setDouble:forKey:](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [setURL:forKey:](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
