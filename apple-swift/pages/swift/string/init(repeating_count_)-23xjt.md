> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(repeating:count:)-23xjt](https://developer.apple.com/documentation/swift/string/init(repeating:count:)-23xjt)

# init(repeating:count:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new string representing the given string repeated the specified number of times.

## Declaration

```swift
init(repeating repeatedValue: String, count: Int)
```

## Parameters

- `repeatedValue`: The string to repeat.
- `count`: The number of times to repeat `repeatedValue` in the resulting string.

<a id="discussion"></a>

## Discussion

For example, you can use this initializer to create a string with ten `"ab"` strings in a row.

```swift
let s = String(repeating: "ab", count: 10)
print(s)
// Prints "abababababababababab"
```

## See Also

### Creating a String

- [init(decoding:)](init%28decoding_%29-nm7v.md): Creates a string by interpreting the file path’s content as UTF-8 on Unix and UTF-16 on Windows.
- [init()](init%28%29.md): Creates an empty string.
- [init(\_:)](init%28__%29-8v3fo.md): Creates a string containing the given character.
- [init(\_:)](init%28__%29-8og6g.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](init%28__%29-1ip93.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](init%28__%29-50pwi.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](init%28__%29-14lv5.md): Creates a new string from the given substring.
- [init(repeating:count:)](init%28repeating_count_%29-11bpi.md): Creates a string representing the given character repeated the specified number of times.
- [init(unsafeUninitializedCapacity:initializingUTF8With:)](init%28unsafeuninitializedcapacity_initializingutf8with_%29.md)
