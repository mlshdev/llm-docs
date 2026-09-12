> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/lifetime-swift.enum/deleteonsuccess](https://developer.apple.com/documentation/xctest/xctattachment/lifetime-swift.enum/deleteonsuccess)

# XCTAttachment.Lifetime.deleteOnSuccess (Swift)

**Framework:** XCTest  
**Kind:** Case

Indicates that the attachment should be deleted if the test passes.

## Declaration

```swift
case deleteOnSuccess
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](../../adding-attachments-to-tests-activities-and-issues.md)

<a id="Discussion"></a>

## Discussion

[XCTAttachment.Lifetime.deleteOnSuccess](deleteonsuccess.md) is the default lifetime for all new attachments. This lifetime indicates that an attachment should be discarded if its test passes successfully, to save on storage space.

To persist an attachment even when its test passes, set the attachment’s [lifetime](../lifetime-swift.property.md) property to [XCTAttachment.Lifetime.keepAlways](keepalways.md) after attachment initialization.

## See Also

### Attachment Lifetimes

- [XCTAttachment.Lifetime.keepAlways](keepalways.md): Indicates that the attachment should be persisted as part of the test’s results even if the test passes.

# XCTAttachmentLifetimeDeleteOnSuccess (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration Case

Indicates that the attachment should be deleted if the test passes.

## Declaration

```objectivec
XCTAttachmentLifetimeDeleteOnSuccess
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](../../adding-attachments-to-tests-activities-and-issues.md)

<a id="Discussion"></a>

## Discussion

[XCTAttachmentLifetimeDeleteOnSuccess](deleteonsuccess.md) is the default lifetime for all new attachments. This lifetime indicates that an attachment should be discarded if its test passes successfully, to save on storage space.

To persist an attachment even when its test passes, set the attachment’s [lifetime](../lifetime-swift.property.md) property to [XCTAttachmentLifetimeKeepAlways](keepalways.md) after attachment initialization.

## See Also

### Attachment Lifetimes

- [XCTAttachmentLifetimeKeepAlways](keepalways.md): Indicates that the attachment should be persisted as part of the test’s results even if the test passes.
