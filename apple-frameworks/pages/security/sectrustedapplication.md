> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectrustedapplication

# SecTrustedApplication (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** macOS 10.0+

An opaque type that contains information about a trusted app.

## Declaration

```swift
class SecTrustedApplication
```

<a id="overview"></a>

## Overview

Use the [SecTrustedApplicationCreateFromPath(\_:\_:)](sectrustedapplicationcreatefrompath%28____%29.md) method to create a new trusted app instance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SecTrustedApplicationRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

An opaque type that contains information about a trusted app.

## Declaration

```objectivec
typedef struct __SecTrustedApplication * SecTrustedApplicationRef;
```

<a id="overview"></a>

## Overview

Use the [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md) method to create a new trusted app instance.
