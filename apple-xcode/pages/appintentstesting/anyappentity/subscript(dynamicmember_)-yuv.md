> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappentity/subscript(dynamicmember:)-yuv](https://developer.apple.com/documentation/appintentstesting/anyappentity/subscript(dynamicmember:)-yuv)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses a nested entity property by name.

## Declaration

```swift
subscript(dynamicMember identifier: String) -> DynamicPropertyPath { get }
```

<a id="overview"></a>

## Overview

The code below shows the syntactic sugar and the equivalent, desugared, subscript syntax.

```swift
try entity.customer.name == "My Name"
try entity[dynamicMember: "customer"][dynamicMember: "name"] == "My Name"
```

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
