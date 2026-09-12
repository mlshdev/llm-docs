> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachment/contenttype](https://developer.apple.com/documentation/healthkit/hkattachment/contenttype)

# contentType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of data stored in the attached file.

## Declaration

```swift
var contentType: UTType { get }
```

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [identifier](identifier.md): The universally unique identifier for the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [metadata](metadata.md): Additional data associated with the attachment in the HealthKit store.
- [HKAttachment.AsyncBytes](asyncbytes.md): An asynchronous sequence that returns the attached file as a series of bytes.

# contentType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of data stored in the attached file.

## Declaration

```objectivec
@property (copy, readonly) UTType * contentType;
```

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [identifier](identifier.md): The universally unique identifier for the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [metadata](metadata.md): Additional data associated with the attachment in the HealthKit store.
