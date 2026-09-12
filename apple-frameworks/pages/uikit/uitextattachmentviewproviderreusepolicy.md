> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextattachmentviewproviderreusepolicy](https://developer.apple.com/documentation/uikit/uitextattachmentviewproviderreusepolicy)

# UITextAttachmentViewProviderReusePolicy (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

An option set that controls whether a text view reuses attachment view providers when scrolling or editing.

## Declaration

```swift
struct UITextAttachmentViewProviderReusePolicy
```

<a id="overview"></a>

## Overview

By default, when content scrolls out of the visible area, `UITextView` removes the attachment view from the view hierarchy. [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) itself persists, but the text view may recreate its view when the content returns. Editing the paragraph containing an attachment has a more significant effect: Because [NSTextLayoutFragment](nstextlayoutfragment.md) is immutable, the text view replaces the existing fragment, discarding and recreating any [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) instances it holds. For attachments with views like a media player, a drawing canvas, or a focused control, either behavior can cause views to flicker or lose their state.

To reuse providers instead of recreating them, register a reuse policy for your view provider subclass:

```swift
textView.register(
    [.onScrollingOutOfViewport, .onEditingInlineParagraphs],
    forTextAttachmentViewProviderType: MyAttachmentViewProvider.self
)
```

You can use [onScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md) or [onEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md) on their own, or combine them to cover both scrolling and editing. Once registered, the reuse policy applies to every instance of that view provider subclass for as long as the text view exists.

Use [onScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md) to keep an attachment view in the view hierarchy when its content scrolls out of the visible area — when it scrolls back into view, the text view reuses the existing view instead of recreating it, preserving states like first responder status and media playback position. Use [onEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md) to keep a provider when someone edits the paragraph containing it; on the next layout pass, the text view reuses it instead of creating a new one, which prevents visible flicker when someone types near an attachment.

## Topics

### Creating a reuse policy

- [init(rawValue:)](uitextattachmentviewproviderreusepolicy/init%28rawvalue_%29.md)

### Specifying reuse policy options

- [onScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md)
- [onEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md)

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

### Managing attachment view reuse

- [register(\_:forTextAttachmentViewProviderType:)](uitextview/register%28__fortextattachmentviewprovidertype_%29.md): Register the UITextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.

# UITextAttachmentViewProviderReusePolicy (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

An option set that controls whether a text view reuses attachment view providers when scrolling or editing.

## Declaration

```objectivec
enum UITextAttachmentViewProviderReusePolicy : NSUInteger;
```

<a id="overview"></a>

## Overview

By default, when content scrolls out of the visible area, `UITextView` removes the attachment view from the view hierarchy. [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) itself persists, but the text view may recreate its view when the content returns. Editing the paragraph containing an attachment has a more significant effect: Because [NSTextLayoutFragment](nstextlayoutfragment.md) is immutable, the text view replaces the existing fragment, discarding and recreating any [NSTextAttachmentViewProvider](nstextattachmentviewprovider.md) instances it holds. For attachments with views like a media player, a drawing canvas, or a focused control, either behavior can cause views to flicker or lose their state.

To reuse providers instead of recreating them, register a reuse policy for your view provider subclass:

```swift
textView.register(
    [.onScrollingOutOfViewport, .onEditingInlineParagraphs],
    forTextAttachmentViewProviderType: MyAttachmentViewProvider.self
)
```

You can use [UITextAttachmentViewProviderReusePolicyOnScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md) or [UITextAttachmentViewProviderReusePolicyOnEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md) on their own, or combine them to cover both scrolling and editing. Once registered, the reuse policy applies to every instance of that view provider subclass for as long as the text view exists.

Use [UITextAttachmentViewProviderReusePolicyOnScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md) to keep an attachment view in the view hierarchy when its content scrolls out of the visible area — when it scrolls back into view, the text view reuses the existing view instead of recreating it, preserving states like first responder status and media playback position. Use [UITextAttachmentViewProviderReusePolicyOnEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md) to keep a provider when someone edits the paragraph containing it; on the next layout pass, the text view reuses it instead of creating a new one, which prevents visible flicker when someone types near an attachment.

## Topics

### Specifying reuse policy options

- [UITextAttachmentViewProviderReusePolicyOnScrollingOutOfViewport](uitextattachmentviewproviderreusepolicy/onscrollingoutofviewport.md)
- [UITextAttachmentViewProviderReusePolicyOnEditingInlineParagraphs](uitextattachmentviewproviderreusepolicy/oneditinginlineparagraphs.md)

## See Also

### Managing attachment view reuse

- [registerTextAttachmentViewProviderReusePolicy:forTextAttachmentViewProviderType:](uitextview/register%28__fortextattachmentviewprovidertype_%29.md): Register the UITextAttachmentViewProviderReusePolicy for all instances of a particular subclass of NSTextAttachmentViewProvider.
