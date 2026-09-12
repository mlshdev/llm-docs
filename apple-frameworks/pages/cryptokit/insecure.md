> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/insecure](https://developer.apple.com/documentation/cryptokit/insecure)

# Insecure

**Framework:** Apple CryptoKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container for older, cryptographically insecure algorithms.

## Declaration

```swift
enum Insecure
```

<a id="overview"></a>

## Overview

> **Important**

> These algorithms aren’t considered cryptographically secure, but the framework provides them for backward compatibility with older services that require them. For new services, avoid these algorithms.

## Topics

### Hashes

- [Insecure.MD5](insecure/md5.md): An implementation of MD5 hashing.
- [Insecure.SHA1](insecure/sha1.md): An implementation of SHA1 hashing.

### Structures

- [Insecure.MD5Digest](insecure/md5digest.md): The output of a MD5 hash.
- [Insecure.SHA1Digest](insecure/sha1digest.md): The output of a SHA1 hash.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
