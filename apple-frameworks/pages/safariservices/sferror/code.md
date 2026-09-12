> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sferror/code](https://developer.apple.com/documentation/safariservices/sferror/code)

# SFError.Code (Swift)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Messages that describe a content blocker or Safari app extension error.

## Declaration

```swift
enum Code
```

```swift
enum SFErrorCode
```

## Topics

### Error Codes

- [SFError.Code.loadingInterrupted](code/loadinginterrupted.md): There was an error loading the content blocker extension.
- [SFError.Code.noAttachmentFound](code/noattachmentfound.md): The Content Blocker extension returned an [NSExtensionItem](../../foundation/nsextensionitem.md) that did not include an attachment.
- [SFError.Code.noExtensionFound](code/noextensionfound.md): A Content Blocker or Safari app extension with the specified bundle identifier was not found, or the bundle identifier specified an extension that was not owned by you.

### Enumeration Cases

- [SFError.Code.internalError](code/internalerror.md)
- [SFError.Code.maximumAttemptsExceeded](code/maximumattemptsexceeded.md)
- [SFError.Code.missingEntitlement](code/missingentitlement.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Miscellaneous errors

- [SFError](../sferror.md): A content blocker or Safari app extension error.
- [SFErrorDomain](../sferrordomain.md): The domain for content blocker or Safari app extension errors.

# SFErrorCode (Objective-C)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Messages that describe a content blocker or Safari app extension error.

## Declaration

```objectivec
enum SFErrorCode : NSInteger;
```

## Topics

### Error Codes

- [SFErrorLoadingInterrupted](code/loadinginterrupted.md): There was an error loading the content blocker extension.
- [SFErrorNoAttachmentFound](code/noattachmentfound.md): The Content Blocker extension returned an [NSExtensionItem](../../foundation/nsextensionitem.md) that did not include an attachment.
- [SFErrorNoExtensionFound](code/noextensionfound.md): A Content Blocker or Safari app extension with the specified bundle identifier was not found, or the bundle identifier specified an extension that was not owned by you.

### Enumeration Cases

- [SFErrorInternalError](code/internalerror.md)
- [SFErrorMaximumAttemptsExceeded](code/maximumattemptsexceeded.md)
- [SFErrorMissingEntitlement](code/missingentitlement.md)

## See Also

### Miscellaneous errors

- [SFErrorDomain](../sferrordomain.md): The domain for content blocker or Safari app extension errors.
