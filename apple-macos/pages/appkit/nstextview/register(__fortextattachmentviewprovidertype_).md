> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/register(_:fortextattachmentviewprovidertype:)](https://developer.apple.com/documentation/appkit/nstextview/register(_:fortextattachmentviewprovidertype:))

# register(\_:forTextAttachmentViewProviderType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Register the NSTextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

## Declaration

```swift
func register(_ policy: NSTextAttachmentViewProviderReusePolicy, forTextAttachmentViewProviderType viewProviderType: AnyClass)
```

# registerTextAttachmentViewProviderReusePolicy:forTextAttachmentViewProviderType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Register the NSTextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

## Declaration

```objectivec
- (void) registerTextAttachmentViewProviderReusePolicy:(NSTextAttachmentViewProviderReusePolicy) policy forTextAttachmentViewProviderType:(Class) viewProviderType;
```
