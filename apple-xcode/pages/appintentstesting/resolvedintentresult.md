> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/resolvedintentresult](https://developer.apple.com/documentation/appintentstesting/resolvedintentresult)

# ResolvedIntentResult

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-safe result from performing an app intent.

## Declaration

```swift
@dynamicMemberLookup struct ResolvedIntentResult
```

## Mentioned In

- [Testing your App Intents code](testing-your-app-intents-code.md)

<a id="overview"></a>

## Overview

After performing the app intent with [run()](anyappintent/run%28%29.md), use the `value` property to inspect the output as shown in the following example:

```swift
let result = try await intent.run()

// Compare the result with an expected value.
XCTAssertEqual(try result.value, "Hello World")

// Access the return value's nested properties.
let name: String = try result.value.customerName

// Pass the return value to another intent for additional verification.
intent2.coffee = try result.value
```

## Topics

### Supporting types

- [ResolvedIntentResult.ValueKeyPath](resolvedintentresult/valuekeypath.md): A structure that enables key-path syntax for the intent result.

### Subscripts

- [subscript(dynamicMember:)](resolvedintentresult/subscript%28dynamicmember_%29-69dzb.md): Accesses nested properties of the result’s return value.
- [subscript(dynamicMember:)](resolvedintentresult/subscript%28dynamicmember_%29-7og7e.md): Accesses the return value of the result, without casting.
- [subscript(dynamicMember:)](resolvedintentresult/subscript%28dynamicmember_%29-kbqk.md): Returns the intent’s output, converted to the inferred type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent and query result verification

- [ResolvedValueQueryResult](resolvedvaluequeryresult.md): The result of an intent value query.
