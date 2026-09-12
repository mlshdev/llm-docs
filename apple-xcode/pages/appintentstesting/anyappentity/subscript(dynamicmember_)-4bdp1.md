> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappentity/subscript(dynamicmember:)-4bdp1](https://developer.apple.com/documentation/appintentstesting/anyappentity/subscript(dynamicmember:)-4bdp1)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses an entity property by name, without casting.

## Declaration

```swift
subscript(dynamicMember identifier: String) -> (any IntentValueExpressing)? { get }
```

<a id="overview"></a>

## Overview

The code below shows the syntactic sugar and the equivalent, desugared, subscript syntax.

```swift
entity.someName == nil
entity[dynamicMember: "someName"] == nil

CreateCoffeeIntent.makeIntent(customerName: entity.someName)
CreateCoffeeIntent.makeIntent(customerName: entity[dynamicMember: "someName"])
```

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
