> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(validating:)-6r2j9](https://developer.apple.com/documentation/swift/string/init(validating:)-6r2j9)

# init(validating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

On Unix, creates the string `"/"`

## Declaration

```swift
init?(validating root: FilePath.Root)
```

## Parameters

- `root`: The path root to be interpreted as `CInterop.PlatformUnicodeEncoding`.

<a id="discussion"></a>

## Discussion

On Windows, creates a string from a path root, validating its contents as UTF-16 on Windows.

On Windows, if the contents of the path root isn’t a well-formed Unicode string, this initializer returns `nil`.
