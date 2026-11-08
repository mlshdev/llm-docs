> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentityidentifierexpectation/expect

# expect

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A callable that creates an entity expectation for the current instance from value expectations for its properties.

## Declaration

```swift
var expect: IntentValueExpectationCallable<any IntentValueExpectation, AppEntityExpectation> { get }
```

<a id="discussion"></a>

## Discussion

Call `expect` with a labeled argument for each property you want to check. Each label names a property, and each argument is the value expectation for it. The expectation doesn’t check properties you omit or pass `nil` for. Pass [isNil](../intentvalueexpectation/isnil.md) to expect a property to be absent. For example:

```swift
let expectation = calendarEntityDefinition
    .expectIdentifier("edea53fb-90b7-4481-afc7-d86e2dd0d27d")
    .expect(title: .equals("Work"))
```
