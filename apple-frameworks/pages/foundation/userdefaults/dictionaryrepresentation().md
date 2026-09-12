> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/dictionaryrepresentation()](https://developer.apple.com/documentation/foundation/userdefaults/dictionaryrepresentation())

# dictionaryRepresentation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary with the union of all key-value pairs found from all domains.

## Declaration

```swift
func dictionaryRepresentation() -> [String : Any]
```

<a id="return-value"></a>

## Return Value

A dictionary with the combined set of keys and values from all domains.

<a id="discussion"></a>

## Discussion

Use this method to retrieve a union of the keys and values available to your app. The dictionary contains the data from all of the available domains. If multiple domains contain a value for the same key, the dictionary includes the value from the earliest occurrence of that key and discards the values in subsequent domains.

The values in the dictionary are one of the property list object types, such as [NSNumber](../nsnumber.md), [NSString](../nsstring.md), [Data](../data.md), [Date](../date.md), [NSArray](../nsarray.md), or [NSDictionary](../nsdictionary.md).

## See Also

### Getting the value of a key

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integer(forKey:)](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [float(forKey:)](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [url(forKey:)](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [string(forKey:)](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArray(forKey:)](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [data(forKey:)](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.

# dictionaryRepresentation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary with the union of all key-value pairs found from all domains.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A dictionary with the combined set of keys and values from all domains.

<a id="discussion"></a>

## Discussion

Use this method to retrieve a union of the keys and values available to your app. The dictionary contains the data from all of the available domains. If multiple domains contain a value for the same key, the dictionary includes the value from the earliest occurrence of that key and discards the values in subsequent domains.

The values in the dictionary are one of the property list object types, such as [NSNumber](../nsnumber.md), [NSString](../nsstring.md), [Data](../data.md), [Date](../date.md), [NSArray](../nsarray.md), or [NSDictionary](../nsdictionary.md).

## See Also

### Getting the value of a key

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integerForKey:](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [floatForKey:](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [URLForKey:](url%28forkey_%29.md): Returns the URL associated with the specified key.
- [stringForKey:](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArrayForKey:](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [dataForKey:](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
