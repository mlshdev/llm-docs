> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sslcontext

# SSLContext (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An opaque type that represents an SSL session context object.

## Declaration

```swift
class SSLContext
```

<a id="overview"></a>

## Overview

The SSL session context object references the state associated with a session. You can’t reuse an SSL session context in multiple sessions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SSLContextRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type that represents an SSL session context object.

## Declaration

```objectivec
typedef struct SSLContext * SSLContextRef;
```

<a id="overview"></a>

## Overview

The SSL session context object references the state associated with a session. You can’t reuse an SSL session context in multiple sessions.
