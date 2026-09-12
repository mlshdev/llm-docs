> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/lifetime-swift.enum](https://developer.apple.com/documentation/xctest/xctattachment/lifetime-swift.enum)

# XCTAttachment.Lifetime (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

The possible lifetime values for a test attachment.

## Declaration

```swift
enum Lifetime
```

## Topics

### Attachment Lifetimes

- [XCTAttachment.Lifetime.deleteOnSuccess](lifetime-swift.enum/deleteonsuccess.md): Indicates that the attachment should be deleted if the test passes.
- [XCTAttachment.Lifetime.keepAlways](lifetime-swift.enum/keepalways.md): Indicates that the attachment should be persisted as part of the test’s results even if the test passes.

### Initializers

- [init(rawValue:)](lifetime-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting an Attachment’s Lifetime

- [lifetime](lifetime-swift.property.md): Indicates whether the attachment is kept or discarded when its associated test passes.

# XCTAttachmentLifetime (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

The possible lifetime values for a test attachment.

## Declaration

```objectivec
enum XCTAttachmentLifetime : NSInteger;
```

## Topics

### Attachment Lifetimes

- [XCTAttachmentLifetimeDeleteOnSuccess](lifetime-swift.enum/deleteonsuccess.md): Indicates that the attachment should be deleted if the test passes.
- [XCTAttachmentLifetimeKeepAlways](lifetime-swift.enum/keepalways.md): Indicates that the attachment should be persisted as part of the test’s results even if the test passes.

## See Also

### Setting an Attachment’s Lifetime

- [lifetime](lifetime-swift.property.md): Indicates whether the attachment is kept or discarded when its associated test passes.
