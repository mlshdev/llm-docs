> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath/subscript(_:)-1hj9z](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/subscript(_:)-1hj9z)

# subscript(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses a collection element by index, without casting.

## Declaration

```swift
subscript(index: Int) -> (any IntentValueExpressing)? { get throws }
```

<a id="overview"></a>

## Overview

The code below shows the syntactic sugar and the equivalent, desugared, subscript syntax.

```swift
let result = try await intent.run() // Expected an array as result value

result.value[0] == nil
CreateCoffeeIntent.makeIntent(customerName: result.value[0])
```

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
