> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(decoding:)-9xh58](https://developer.apple.com/documentation/swift/string/init(decoding:)-9xh58)

# init(decoding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a string by interpreting the path component’s content as UTF-8 on Unix and UTF-16 on Windows.

## Declaration

```swift
init(decoding component: FilePath.Component)
```

## Parameters

- `component`: The path component to be interpreted as `CInterop.PlatformUnicodeEncoding`.

<a id="discussion"></a>

## Discussion

If the content of the path component isn’t a well-formed Unicode string, this initializer replaces invalid bytes with U+FFFD. This means that, depending on the semantics of the specific file system, conversion to a string and back to a path component might result in a value that’s different from the original path component.
