> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/description](https://developer.apple.com/documentation/foundation/nsdictionary/description)

# description (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that represents the contents of the dictionary, formatted as a property list.

## Declaration

```swift
var description: String { get }
```

<a id="Discussion"></a>

## Discussion

If each key in the dictionary is an `NSString` object, the entries are listed in ascending order by key, otherwise the order in which the entries are listed is undefined.  This property is intended to produce readable output for debugging purposes, not for serializing data. If you want to store dictionary data for later retrieval, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i) and [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Describing a Dictionary

- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [description(withLocale:indent:)](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

# description (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that represents the contents of the dictionary, formatted as a property list.

## Declaration

```objectivec
@property (copy, readonly) NSString * description;
```

<a id="Discussion"></a>

## Discussion

If each key in the dictionary is an `NSString` object, the entries are listed in ascending order by key, otherwise the order in which the entries are listed is undefined.  This property is intended to produce readable output for debugging purposes, not for serializing data. If you want to store dictionary data for later retrieval, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i) and [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## See Also

### Describing a Dictionary

- [descriptionInStringsFileFormat](descriptioninstringsfileformat.md): A string that represents the contents of the dictionary, formatted in `.strings` file format.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
