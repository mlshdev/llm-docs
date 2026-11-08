> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/isnil

# isNil

**Framework:** App Intents Testing  
**Kind:** Type Property  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An expectation that requires a parameter, property, or result to have no value.

## Declaration

```swift
static var isNil: PrimitiveExpectation { get }
```

<a id="discussion"></a>

## Discussion

Use this expectation to check that a value is absent. To leave a value unchecked, pass `nil` or leave out its label instead.
