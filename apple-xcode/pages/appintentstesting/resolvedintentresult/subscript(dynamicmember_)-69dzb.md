> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/resolvedintentresult/subscript(dynamicmember:)-69dzb](https://developer.apple.com/documentation/appintentstesting/resolvedintentresult/subscript(dynamicmember:)-69dzb)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses nested properties of the result’s return value.

## Declaration

```swift
subscript(dynamicMember keyPath: KeyPath<ResolvedIntentResult.ValueKeyPath, Never>) -> DynamicPropertyPath { get }
```

<a id="overview"></a>

## Overview

For example:

```swift
let result = try await intent.run()

// Accessing properties.
try result.value.customerName == "My Name"
```

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
