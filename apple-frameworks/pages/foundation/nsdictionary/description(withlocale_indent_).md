> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/description(withlocale:indent:)](https://developer.apple.com/documentation/foundation/nsdictionary/description(withlocale:indent:))

# description(withLocale:indent:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object that represents the contents of the dictionary, formatted as a property list.

## Declaration

```swift
func description(withLocale locale: Any?, indent level: Int) -> String
```

## Parameters

- `locale`: An object that specifies options used for formatting each of the dictionary’s keys and values; pass `nil` if you don’t want them formatted.

  On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`. In OS X v10.4 and earlier it must be an instance of `NSDictionary`.
- `level`: Specifies a level of indentation, to make the output more readable: the indentation is (4 spaces) \* `level`.

<a id="return-value"></a>

## Return Value

A string object that represents the contents of the dictionary, formatted as a property list.

<a id="Discussion"></a>

## Discussion

The returned `NSString` object contains the string representations of each of the dictionary’s entries. [description(withLocale:indent:)](description%28withlocale_indent_%29.md) obtains the string representation of a given key or value as follows:

- If the object is an `NSString` object, it is used as is.
- If the object responds to `descriptionWithLocale:indent:`, that method is invoked to obtain the object’s string representation.
- If the object responds to `descriptionWithLocale:`, that method is invoked to obtain the object’s string representation.
- If none of the above conditions is met, the object’s string representation is obtained by through its `description` property.

If each key in the dictionary responds to `compare:`, the entries are listed in ascending order, by key. Otherwise, the order in which the entries are listed is undefined.

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

# descriptionWithLocale:indent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object that represents the contents of the dictionary, formatted as a property list.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale indent:(NSUInteger) level;
```

## Parameters

- `locale`: An object that specifies options used for formatting each of the dictionary’s keys and values; pass `nil` if you don’t want them formatted.

  On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`. In OS X v10.4 and earlier it must be an instance of `NSDictionary`.
- `level`: Specifies a level of indentation, to make the output more readable: the indentation is (4 spaces) \* `level`.

<a id="return-value"></a>

## Return Value

A string object that represents the contents of the dictionary, formatted as a property list.

<a id="Discussion"></a>

## Discussion

The returned `NSString` object contains the string representations of each of the dictionary’s entries. [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md) obtains the string representation of a given key or value as follows:

- If the object is an `NSString` object, it is used as is.
- If the object responds to `descriptionWithLocale:indent:`, that method is invoked to obtain the object’s string representation.
- If the object responds to `descriptionWithLocale:`, that method is invoked to obtain the object’s string representation.
- If none of the above conditions is met, the object’s string representation is obtained by through its `description` property.

If each key in the dictionary responds to `compare:`, the entries are listed in ascending order, by key. Otherwise, the order in which the entries are listed is undefined.

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
