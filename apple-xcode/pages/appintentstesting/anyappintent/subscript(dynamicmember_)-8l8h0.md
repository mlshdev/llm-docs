> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappintent/subscript(dynamicmember:)-8l8h0](https://developer.apple.com/documentation/appintentstesting/anyappintent/subscript(dynamicmember:)-8l8h0)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses an intent parameter by name, without casting.

## Declaration

```swift
subscript(dynamicMember identifier: String) -> (any IntentValueExpressing)? { get set }
```

<a id="overview"></a>

## Overview

The code below shows the syntactic sugar and the equivalent, desugared, subscript syntax.

```swift
// Accessing parameters
intent.someName == nil
intent[dynamicMember: "someName"] == nil

CreateCoffeeIntent.makeIntent(customerName: intent.someName)
CreateCoffeeIntent.makeIntent(customerName: intent[dynamicMember: "someName"])

// Modifying parameter values
intent.someName = "My Name 2"
intent[dynamicMember: "someName"] = "My Name 2"
```

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
