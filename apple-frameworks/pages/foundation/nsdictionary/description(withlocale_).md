> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/description(withlocale:)](https://developer.apple.com/documentation/foundation/nsdictionary/description(withlocale:))

# description(withLocale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object that represents the contents of the dictionary, formatted as a property list.

## Declaration

```swift
func description(withLocale locale: Any?) -> String
```

## Parameters

- `locale`: An object that specifies options used for formatting each of the dictionary’s keys and values; pass `nil` if you don’t want them formatted.

  On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`. In OS X v10.4 and earlier it must be an instance of `NSDictionary`.

<a id="Discussion"></a>

## Discussion

For a description of how `locale` is applied to each element in the dictionary, see [description(withLocale:indent:)](description%28withlocale_indent_%29.md).

If each key in the dictionary responds to `compare:`, the entries are listed in ascending order by key, otherwise the order in which the entries are listed is undefined.

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [description(withLocale:indent:)](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object that represents the contents of the dictionary, formatted as a property list.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: An object that specifies options used for formatting each of the dictionary’s keys and values; pass `nil` if you don’t want them formatted.

  On iOS and macOS 10.5 and later, either an instance of `NSDictionary` or an `NSLocale` object may be used for `locale`. In OS X v10.4 and earlier it must be an instance of `NSDictionary`.

<a id="Discussion"></a>

## Discussion

For a description of how `locale` is applied to each element in the dictionary, see [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md).

If each key in the dictionary responds to `compare:`, the entries are listed in ascending order by key, otherwise the order in which the entries are listed is undefined.

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
