> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cmssignerstatus/needsdetachedcontent

# CMSSignerStatus.needsDetachedContent (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The message was signed but has detached content. You must call the [CMSDecoderSetDetachedContent(\_:\_:)](../cmsdecodersetdetachedcontent%28____%29.md) function before ascertaining the signature status.

## Declaration

```swift
case needsDetachedContent
```

# kCMSSignerNeedsDetachedContent (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The message was signed but has detached content. You must call the [CMSDecoderSetDetachedContent](../cmsdecodersetdetachedcontent%28____%29.md) function before ascertaining the signature status.

## Declaration

```objectivec
kCMSSignerNeedsDetachedContent
```
