> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/resolvedintentresult/subscript(dynamicmember:)-kbqk](https://developer.apple.com/documentation/appintentstesting/resolvedintentresult/subscript(dynamicmember:)-kbqk)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the intent’s output, converted to the inferred type.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<ResolvedIntentResult.ValueKeyPath, Never>) -> T where T : IntentValueConvertible { get throws }
```

<a id="overview"></a>

## Overview

Access the return value using the `value` key path, for example:

```swift
let result = try await intent.run()

// Compare the result with a concrete value.
XCTAssertEqual(try result.value, "Hello World")
```

If the property’s value isn’t an instance of the type `T`, this subscript throws an error.

For more information about dynamic-member syntax, see [dynamicMemberLookup](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/attributes#dynamicMemberLookup) in *[The Swift Programming Language](https://docs.swift.org/swift-book/)*.
