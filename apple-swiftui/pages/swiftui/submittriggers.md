> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/submittriggers](https://developer.apple.com/documentation/swiftui/submittriggers)

# SubmitTriggers

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that defines various triggers that result in the firing of a submission action.

## Declaration

```swift
struct SubmitTriggers
```

<a id="overview"></a>

## Overview

These triggers may be provided to the [onSubmit(of:\_:)](view/onsubmit%28of___%29.md) modifier to alter which types of user behaviors trigger a provided submission action.

## Topics

### Getting submit triggers

- [search](submittriggers/search.md): Defines triggers originating from search fields constructed from searchable modifiers.
- [text](submittriggers/text.md): Defines triggers originating from text input controls like `TextField` and `SecureField`.

### Creating a set of options

- [init(rawValue:)](submittriggers/init%28rawvalue_%29.md): Creates a set of submit triggers.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Responding to submission events

- [onSubmit(of:\_:)](view/onsubmit%28of___%29.md): Adds an action to perform when the user submits a value to this view.
- [submitScope(\_:)](view/submitscope%28__%29.md): Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.
