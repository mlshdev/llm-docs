> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(validatingplatformstring:)-91z6f](https://developer.apple.com/documentation/swift/string/init(validatingplatformstring:)-91z6f)

# init(validatingPlatformString:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a string by interpreting the null-terminated platform string as UTF-8 on Unix and UTF-16 on Windows.

## Declaration

```swift
init?(validatingPlatformString platformString: [CInterop.PlatformChar])
```

## Parameters

- `platformString`: The null-terminated platform string to be interpreted as `CInterop.PlatformUnicodeEncoding`.

<a id="discussion"></a>

## Discussion

- Note It is a precondition that `platformString` must be null-terminated. The absence of a null byte will trigger a runtime error.

If the contents of the platform string isn’t well-formed Unicode, this initializer returns `nil`.
