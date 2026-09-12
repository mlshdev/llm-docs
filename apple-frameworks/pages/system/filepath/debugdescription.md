> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/debugdescription](https://developer.apple.com/documentation/system/filepath/debugdescription)

# debugDescription

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A textual representation of the file path, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

If the content of the path isn’t a well-formed Unicode string, this replaces invalid bytes with U+FFFD. See `String.init(decoding:)`

## See Also

### Working with File Paths

- [length](length.md): The length of the file path, excluding the null terminator.
- [description](description.md): A textual representation of the file path.
