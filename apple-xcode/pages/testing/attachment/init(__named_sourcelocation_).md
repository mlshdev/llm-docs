> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/init(_:named:sourcelocation:)](https://developer.apple.com/documentation/testing/attachment/init(_:named:sourcelocation:))

# init(\_:named:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Initializer  
**Availability:** Swift 6.2+ · Xcode 26.0+

Initialize an instance of this type that encloses the given attachable value.

## Declaration

```swift
init(_ attachableValue: consuming AttachableValue, named preferredName: String? = nil, sourceLocation: SourceLocation = #_sourceLocation)
```

## Parameters

- `attachableValue`: The value that will be attached to the output of the test run.
- `preferredName`: The preferred name of the attachment to use when saving it. If `nil`, the testing library attempts to generate a reasonable filename for the attached value.
- `sourceLocation`: The source location of the call to this initializer. This value is used when recording issues associated with the attachment.
