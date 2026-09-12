> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/string(forkey:)](https://developer.apple.com/documentation/foundation/userdefaults/string(forkey:))

# string(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the string associated with the specified key.

## Declaration

```swift
func string(forKey defaultName: String) -> String?
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The string associated with `defaultName`, or `nil` if the key isn’t present in the defaults database.

<a id="discussion"></a>

## Discussion

This method automatically coerces certain types to equivalent strings. For example, it converts the integer `123` to the string “123”. If the key is present, but the method can’t use it to create an appropriate string, this method returns `nil`.

This returned string is immutable, even if you originally set the key to a mutable string.

## See Also

### Getting the value of a key

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integer(forKey:)](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [float(forKey:)](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [url(forKey:)](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [stringArray(forKey:)](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [data(forKey:)](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation()](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.

# stringForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the string associated with the specified key.

## Declaration

```objectivec
- (NSString *) stringForKey:(NSString *) defaultName;
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The string associated with `defaultName`, or `nil` if the key isn’t present in the defaults database.

<a id="discussion"></a>

## Discussion

This method automatically coerces certain types to equivalent strings. For example, it converts the integer `123` to the string “123”. If the key is present, but the method can’t use it to create an appropriate string, this method returns `nil`.

This returned string is immutable, even if you originally set the key to a mutable string.

## See Also

### Getting the value of a key

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integerForKey:](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [floatForKey:](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [URLForKey:](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [stringArrayForKey:](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [dataForKey:](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.
