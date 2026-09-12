> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/template/value](https://developer.apple.com/documentation/foundation/url/template/value)

# URL.Template.Value

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The value of a variable used for expanding a template.

## Declaration

```swift
struct Value
```

<a id="overview"></a>

## Overview

A value can either be some text, a list, or an associate list (a dictionary).

<a id="Examples"></a>

### Examples

```swift
let hello: URL.Template.Value = .text("Hello World!")
let list: URL.Template.Value = .list(["red", "green", "blue"])
let keys: URL.Template.Value = .associativeList([
    "semi": ";",
    "dot": ".",
    "comma": ",",
])
```

Alternatively, for constants, the `ExpressibleBy…Literal` implementations can be used, i.e.

```swift
let hello: URL.Template.Value = "Hello World!"
let list: URL.Template.Value = ["red", "green", "blue"]
let keys: URL.Template.Value = [
    "semi": ";",
    "dot": ".",
    "comma": ",",
]
```

## Topics

### Type Methods

- [associativeList(\_:)](value/associativelist%28__%29.md): An associative list value (ordered key-value pairs) to be used with a `URL.Template`.
- [list(\_:)](value/list%28__%29.md): A list value (an array of `String`s) to be used with a `URL.Template`.
- [text(\_:)](value/text%28__%29.md): A text value to be used with a `URL.Template`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
