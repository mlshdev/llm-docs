> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkattachment/identifier

# identifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The universally unique identifier for the attached file.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [contentType](contenttype.md): The type of data stored in the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [metadata](metadata.md): Additional data associated with the attachment in the HealthKit store.
- [HKAttachment.AsyncBytes](asyncbytes.md): An asynchronous sequence that returns the attached file as a series of bytes.

# identifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The universally unique identifier for the attached file.

## Declaration

```objectivec
@property (copy, readonly) NSUUID * identifier;
```

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [contentType](contenttype.md): The type of data stored in the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [metadata](metadata.md): Additional data associated with the attachment in the HealthKit store.
