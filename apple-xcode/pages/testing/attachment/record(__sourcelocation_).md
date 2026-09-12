> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/record(_:sourcelocation:)](https://developer.apple.com/documentation/testing/attachment/record(_:sourcelocation:))

# record(\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Attach an attachment to the current test.

## Declaration

```swift
static func record(_ attachment: consuming Attachment<AttachableValue>, sourceLocation: SourceLocation = #_sourceLocation)
```

## Parameters

- `attachment`: The attachment to attach.
- `sourceLocation`: The source location of the call to this function.

<a id="discussion"></a>

## Discussion

When `attachableValue` is an instance of a type that does not conform to the [Sendable](https://developer.apple.com/documentation/swift/sendable) protocol, the testing library calls its [withUnsafeBytes(for:\_:)](../attachable/withunsafebytes%28for___%29.md) immediately and records a copy of the resulting buffer instead. If `attachableValue` throws an error when the testing library calls its [withUnsafeBytes(for:\_:)](../attachable/withunsafebytes%28for___%29.md) function, the testing library records that error as an issue in the current test.
