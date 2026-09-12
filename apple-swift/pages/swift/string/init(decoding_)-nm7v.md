> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(decoding:)-nm7v](https://developer.apple.com/documentation/swift/string/init(decoding:)-nm7v)

# init(decoding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a string by interpreting the file path’s content as UTF-8 on Unix and UTF-16 on Windows.

## Declaration

```swift
init(decoding path: FilePath)
```

## Parameters

- `path`: The file path to be interpreted as `CInterop.PlatformUnicodeEncoding`.

<a id="discussion"></a>

## Discussion

If the content of the file path isn’t a well-formed Unicode string, this initializer replaces invalid bytes with U+FFFD. This means that, depending on the semantics of the specific file system, conversion to a string and back to a path might result in a value that’s different from the original path.

## See Also

### Creating a String

- [init()](init%28%29.md): Creates an empty string.
- [init(\_:)](init%28__%29-8v3fo.md): Creates a string containing the given character.
- [init(\_:)](init%28__%29-8og6g.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](init%28__%29-1ip93.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](init%28__%29-50pwi.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](init%28__%29-14lv5.md): Creates a new string from the given substring.
- [init(repeating:count:)](init%28repeating_count_%29-23xjt.md): Creates a new string representing the given string repeated the specified number of times.
- [init(repeating:count:)](init%28repeating_count_%29-11bpi.md): Creates a string representing the given character repeated the specified number of times.
- [init(unsafeUninitializedCapacity:initializingUTF8With:)](init%28unsafeuninitializedcapacity_initializingutf8with_%29.md)
