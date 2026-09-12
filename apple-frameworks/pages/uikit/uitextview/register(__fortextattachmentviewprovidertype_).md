> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/register(_:fortextattachmentviewprovidertype:)](https://developer.apple.com/documentation/uikit/uitextview/register(_:fortextattachmentviewprovidertype:))

# register(\_:forTextAttachmentViewProviderType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Register the UITextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

## Declaration

```swift
func register(_ policy: UITextAttachmentViewProviderReusePolicy, forTextAttachmentViewProviderType viewProviderType: AnyClass)
```

## Mentioned In

- [Managing viewport layout and attachment reuse in text views](../managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md)

## See Also

### Managing attachment view reuse

- [UITextAttachmentViewProviderReusePolicy](../uitextattachmentviewproviderreusepolicy.md): An option set that controls whether a text view reuses attachment view providers when scrolling or editing.

# registerTextAttachmentViewProviderReusePolicy:forTextAttachmentViewProviderType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Register the UITextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

## Declaration

```objectivec
- (void) registerTextAttachmentViewProviderReusePolicy:(UITextAttachmentViewProviderReusePolicy) policy forTextAttachmentViewProviderType:(Class) viewProviderType;
```

## Mentioned In

- [Managing viewport layout and attachment reuse in text views](../managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md)

## See Also

### Managing attachment view reuse

- [UITextAttachmentViewProviderReusePolicy](../uitextattachmentviewproviderreusepolicy.md): An option set that controls whether a text view reuses attachment view providers when scrolling or editing.
