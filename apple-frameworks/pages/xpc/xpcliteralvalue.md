> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcliteralvalue](https://developer.apple.com/documentation/xpc/xpcliteralvalue)

# XPCLiteralValue

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS · watchOS 27.0+

A type that bridges Swift literal values to XPC objects for use in dictionary literals.

## Declaration

```swift
struct XPCLiteralValue
```

<a id="overview"></a>

## Overview

This type enables ergonomic dictionary literal syntax:

```swift
let dict: XPCDictionary = [
    "name": "John",
    "age": 30,
    "isActive": true,
    "score": 95.5
]
```

## Topics

### Initializers

- [init(\_:)](xpcliteralvalue/init%28__%29-1dqub.md): Creates an XPCLiteralValue from a signed integer.
- [init(\_:)](xpcliteralvalue/init%28__%29-1iznz.md): Creates an XPCLiteralValue from a String.
- [init(\_:)](xpcliteralvalue/init%28__%29-381hb.md): Creates an XPCLiteralValue from an xpc_object_t.
- [init(\_:)](xpcliteralvalue/init%28__%29-75v42.md): Creates an XPCLiteralValue from a Bool.
- [init(\_:)](xpcliteralvalue/init%28__%29-89roz.md): Creates an XPCLiteralValue from a floating-point number.
- [init(\_:)](xpcliteralvalue/init%28__%29-98a24.md): Creates an XPCLiteralValue from an XPCDictionary.
- [init(\_:)](xpcliteralvalue/init%28__%29-nb1u.md): Creates an XPCLiteralValue from an unsigned integer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByBooleanLiteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
