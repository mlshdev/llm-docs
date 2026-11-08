> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/notnil

# notNil

**Framework:** App Intents Testing  
**Kind:** Type Property  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An expectation that requires a parameter, property, or result to have a value.

## Declaration

```swift
static var notNil: PrimitiveExpectation { get }
```

<a id="discussion"></a>

## Discussion

Use this expectation to check that a value is present without checking its content.
