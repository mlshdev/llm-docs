> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappintent/subscript(dynamicmember:)-127ab](https://developer.apple.com/documentation/appintentstesting/anyappintent/subscript(dynamicmember:)-127ab)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses an intent parameter by name, for comparison with a known value.

## Declaration

```swift
subscript<T>(dynamicMember identifier: String) -> T where T : IntentValueConvertible { get throws }
```

<a id="overview"></a>

## Overview

The code below shows the syntactic sugar and the equivalent, desugared, subscript syntax.

```swift
try intent.someName == "My Name"
try intent[dynamicMember: "someName"] == "My Name"
```

If the property’s value isn’t an instance of the type `T`, this subscript throws an error.

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
