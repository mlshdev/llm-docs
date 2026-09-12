> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentviewproviderreusepolicy](https://developer.apple.com/documentation/appkit/nstextattachmentviewproviderreusepolicy)

# NSTextAttachmentViewProviderReusePolicy (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct NSTextAttachmentViewProviderReusePolicy
```

## Topics

### Creating a reuse policy

- [init(rawValue:)](nstextattachmentviewproviderreusepolicy/init%28rawvalue_%29.md)

### Specifying reuse policy options

- [onScrollingOutOfViewport](nstextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md)
- [onEditingInlineParagraphs](nstextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCellProtocol](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.

# NSTextAttachmentViewProviderReusePolicy (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum NSTextAttachmentViewProviderReusePolicy : NSUInteger;
```

## Topics

### Specifying reuse policy options

- [NSTextAttachmentViewProviderReusePolicyOnScrollingOutOfViewport](nstextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md)
- [NSTextAttachmentViewProviderReusePolicyOnEditingInlineParagraphs](nstextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md)

## See Also

### Attachments

- [NSTextAttachment](nstextattachment.md): The values for the attachment characteristics of attributed strings and related objects.
- [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md): A container object that associates a text attachment at a particular document location with a view object.
- [NSAdaptiveImageGlyph](nsadaptiveimageglyph.md): A data object for an emoji-like image that can appear in attributed text.
- [NSTextAttachmentContainer](nstextattachmentcontainer.md): A set of methods that defines the interface to text attachment objects from a layout manager.
- [NSTextAttachmentLayout](nstextattachmentlayout.md): A set of methods that defines the interface to attachment objects from a text layout manager.
- [NSTextAttachmentCell](nstextattachmentcell-swift.class.md): An object that implements the functionality of the text attachment cell protocol.
- [NSTextAttachmentCell](nstextattachmentcellprotocol.md): A set of methods that declares the interface for objects that draw text attachment icons and handle mouse events on their icons.
