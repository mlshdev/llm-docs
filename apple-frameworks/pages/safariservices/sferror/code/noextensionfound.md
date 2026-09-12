> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sferror/code/noextensionfound](https://developer.apple.com/documentation/safariservices/sferror/code/noextensionfound)

# SFError.Code.noExtensionFound (Swift)

**Framework:** Safari Services  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

A Content Blocker or Safari app extension with the specified bundle identifier was not found, or the bundle identifier specified an extension that was not owned by you.

## Declaration

```swift
case noExtensionFound
```

## See Also

### Error Codes

- [SFError.Code.loadingInterrupted](loadinginterrupted.md): There was an error loading the content blocker extension.
- [SFError.Code.noAttachmentFound](noattachmentfound.md): The Content Blocker extension returned an [NSExtensionItem](../../../foundation/nsextensionitem.md) that did not include an attachment.

# SFErrorNoExtensionFound (Objective-C)

**Framework:** Safari Services  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

A Content Blocker or Safari app extension with the specified bundle identifier was not found, or the bundle identifier specified an extension that was not owned by you.

## Declaration

```objectivec
SFErrorNoExtensionFound
```

## See Also

### Error Codes

- [SFErrorLoadingInterrupted](loadinginterrupted.md): There was an error loading the content blocker extension.
- [SFErrorNoAttachmentFound](noattachmentfound.md): The Content Blocker extension returned an [NSExtensionItem](../../../foundation/nsextensionitem.md) that did not include an attachment.
