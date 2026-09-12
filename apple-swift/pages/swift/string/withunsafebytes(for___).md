> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/withunsafebytes(for:_:)](https://developer.apple.com/documentation/swift/string/withunsafebytes(for:_:))

# withUnsafeBytes(for:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift 6.2+ · Xcode 26.0+

## Declaration

```swift
func withUnsafeBytes<R>(for attachment: borrowing Attachment<String>, _ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```
