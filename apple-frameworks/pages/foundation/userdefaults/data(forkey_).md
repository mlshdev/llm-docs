> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/data(forkey:)](https://developer.apple.com/documentation/foundation/userdefaults/data(forkey:))

# data(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data object associated with the specified key.

## Declaration

```swift
func data(forKey defaultName: String) -> Data?
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The data object associated with `defaultName`, or `nil` if the key isn’t present in the defaults database. This method also returns `nil` if the retrieved value isn’t a data object.

<a id="discussion"></a>

## Discussion

The returned object is immutable, even if you originally set the key to a mutable value.

## See Also

### Getting the value of a key

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integer(forKey:)](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [float(forKey:)](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [url(forKey:)](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [string(forKey:)](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArray(forKey:)](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation()](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.

# dataForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data object associated with the specified key.

## Declaration

```objectivec
- (NSData *) dataForKey:(NSString *) defaultName;
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The data object associated with `defaultName`, or `nil` if the key isn’t present in the defaults database. This method also returns `nil` if the retrieved value isn’t a data object.

<a id="discussion"></a>

## Discussion

The returned object is immutable, even if you originally set the key to a mutable value.

## See Also

### Getting the value of a key

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integerForKey:](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [floatForKey:](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [URLForKey:](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [stringForKey:](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArrayForKey:](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.
