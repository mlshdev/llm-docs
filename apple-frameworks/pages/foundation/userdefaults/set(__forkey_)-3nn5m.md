> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/set(_:forkey:)-3nn5m](https://developer.apple.com/documentation/foundation/userdefaults/set(_:forkey:)-3nn5m)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a Boolean value.

## Declaration

```swift
func set(_ value: Bool, forKey defaultName: String)
```

## Parameters

- `value`: The Boolean value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the Boolean value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [set(\_:forKey:)](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [set(\_:forKey:)](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [set(\_:forKey:)](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [set(\_:forKey:)](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [set(\_:forKey:)](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.

# setBool:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a Boolean value.

## Declaration

```objectivec
- (void) setBool:(BOOL) value forKey:(NSString *) defaultName;
```

## Parameters

- `value`: The Boolean value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method places the Boolean value in an [NSNumber](../nsnumber.md) type before writing the key and value to the defaults database. After you call this method, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [setInteger:forKey:](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [setFloat:forKey:](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [setDouble:forKey:](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [setURL:forKey:](set%28__forkey_%29-2bqjt.md): Sets the value of the specified key to a URL.
- [setObject:forKey:](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.
