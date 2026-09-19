> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextview/register(_:fortextattachmentviewprovidertype:)

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
