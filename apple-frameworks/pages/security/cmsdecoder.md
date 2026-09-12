> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecoder](https://developer.apple.com/documentation/security/cmsdecoder)

# CMSDecoder (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque reference to a CMS decoder object.

## Declaration

```swift
class CMSDecoder
```

<a id="overview"></a>

## Overview

This is object is compatible with Core Foundation and uses standard Core Foundation semantics. Dispose of it with the [CFRelease](../corefoundation/cfrelease.md) function.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# CMSDecoderRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque reference to a CMS decoder object.

## Declaration

```objectivec
typedef struct _CMSDecoder * CMSDecoderRef;
```

<a id="overview"></a>

## Overview

This is object is compatible with Core Foundation and uses standard Core Foundation semantics. Dispose of it with the [CFRelease](../corefoundation/cfrelease.md) function.
