> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/withmagiccookie(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/withmagiccookie(_:))

# withMagicCookie(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the magic cookie.

## Declaration

```swift
func withMagicCookie<R>(_ body: (UnsafeRawBufferPointer?) throws -> R) rethrows -> R
```

## Parameters

- `body`: A pointer to the magic cookie in the audio format description.
