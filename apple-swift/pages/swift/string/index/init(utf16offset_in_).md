> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/index/init(utf16offset:in:)](https://developer.apple.com/documentation/swift/string/index/init(utf16offset:in:))

# init(utf16Offset:in:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new index at the specified UTF-16 code unit offset

## Declaration

```swift
init<S>(utf16Offset offset: Int, in s: S) where S : StringProtocol
```

## Parameters

- `offset`: An offset in UTF-16 code units.
- `s`: The string.
