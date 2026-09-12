> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/set(_:forkey:)-2w22f](https://developer.apple.com/documentation/foundation/userdefaults/set(_:forkey:)-2w22f)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a double.

## Declaration

```swift
func set(_ value: Double, forKey defaultName: String)
```

## Parameters

- `value`: The double value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the double value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [set(\_:forKey:)](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [set(\_:forKey:)](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [set(\_:forKey:)](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [set(\_:forKey:)](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.

# setDouble:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a double.

## Declaration

```objectivec
- (void) setDouble:(double) value forKey:(NSString *) defaultName;
```

## Parameters

- `value`: The double value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the double value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [setBool:forKey:](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [setInteger:forKey:](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [setFloat:forKey:](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [setURL:forKey:](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [setObject:forKey:](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.
