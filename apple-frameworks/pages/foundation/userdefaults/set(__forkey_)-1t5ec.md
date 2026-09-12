> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/set(_:forkey:)-1t5ec](https://developer.apple.com/documentation/foundation/userdefaults/set(_:forkey:)-1t5ec)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a floating-point number.

## Declaration

```swift
func set(_ value: Float, forKey defaultName: String)
```

## Parameters

- `value`: The floating-point value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the floating-point value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [set(\_:forKey:)](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [set(\_:forKey:)](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [set(\_:forKey:)](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [set(\_:forKey:)](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.

# setFloat:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a floating-point number.

## Declaration

```objectivec
- (void) setFloat:(float) value forKey:(NSString *) defaultName;
```

## Parameters

- `value`: The floating-point value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the floating-point value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [setBool:forKey:](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [setInteger:forKey:](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [setDouble:forKey:](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [setURL:forKey:](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [setObject:forKey:](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.
