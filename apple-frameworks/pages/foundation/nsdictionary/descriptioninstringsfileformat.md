> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/descriptioninstringsfileformat](https://developer.apple.com/documentation/foundation/nsdictionary/descriptioninstringsfileformat)

# descriptionInStringsFileFormat (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that represents the contents of the dictionary, formatted in `.strings` file format.

## Declaration

```swift
var descriptionInStringsFileFormat: String { get }
```

<a id="Discussion"></a>

## Discussion

The order in which the entries are listed is undefined.

This method fails unless the dictionary can be represented by a strings resource file. For details, see [String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6) in [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [description(withLocale:indent:)](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.

# descriptionInStringsFileFormat (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string that represents the contents of the dictionary, formatted in `.strings` file format.

## Declaration

```objectivec
@property (copy, readonly) NSString * descriptionInStringsFileFormat;
```

<a id="Discussion"></a>

## Discussion

The order in which the entries are listed is undefined.

This method fails unless the dictionary can be represented by a strings resource file. For details, see [String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6) in [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

## See Also

### Describing a Dictionary

- [description](description.md): A string that represents the contents of the dictionary, formatted as a property list.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
- [descriptionWithLocale:indent:](description%28withlocale_indent_%29.md): Returns a string object that represents the contents of the dictionary, formatted as a property list.
