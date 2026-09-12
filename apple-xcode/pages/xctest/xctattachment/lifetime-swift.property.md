> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/lifetime-swift.property](https://developer.apple.com/documentation/xctest/xctattachment/lifetime-swift.property)

# lifetime (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates whether the attachment is kept or discarded when its associated test passes.

## Declaration

```swift
var lifetime: XCTAttachment.Lifetime { get set }
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](../adding-attachments-to-tests-activities-and-issues.md)

<a id="Discussion"></a>

## Discussion

Defaults to [XCTAttachment.Lifetime.deleteOnSuccess](lifetime-swift.enum/deleteonsuccess.md), indicating that the attachment should be discarded when its test passes successfully, to save on storage space. Set this property to [XCTAttachment.Lifetime.keepAlways](lifetime-swift.enum/keepalways.md) to persist an attachment even when its test passes.

## See Also

### Setting an Attachment’s Lifetime

- [XCTAttachment.Lifetime](lifetime-swift.enum.md): The possible lifetime values for a test attachment.

# lifetime (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates whether the attachment is kept or discarded when its associated test passes.

## Declaration

```objectivec
@property XCTAttachmentLifetime lifetime;
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](../adding-attachments-to-tests-activities-and-issues.md)

<a id="Discussion"></a>

## Discussion

Defaults to [XCTAttachmentLifetimeDeleteOnSuccess](lifetime-swift.enum/deleteonsuccess.md), indicating that the attachment should be discarded when its test passes successfully, to save on storage space. Set this property to [XCTAttachmentLifetimeKeepAlways](lifetime-swift.enum/keepalways.md) to persist an attachment even when its test passes.

## See Also

### Setting an Attachment’s Lifetime

- [XCTAttachmentLifetime](lifetime-swift.enum.md): The possible lifetime values for a test attachment.
