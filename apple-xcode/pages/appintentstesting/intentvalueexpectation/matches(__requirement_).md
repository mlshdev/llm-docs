> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/matches(_:requirement:)

# matches(\_:requirement:)

**Framework:** App Intents Testing  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an expectation that requires the value to satisfy a predicate, with an optional description of the check.

## Declaration

```swift
static func matches<Input>(_ predicate: Predicate<Input>, requirement: String? = nil) -> PredicateExpectation where Input : IntentValueConvertible
```

## Parameters

- `predicate`: The predicate to evaluate against the value.
- `requirement`: A readable description of the check. The default is `nil`.

<a id="return-value"></a>

## Return Value

A predicate expectation that evaluates `predicate` against the value.

<a id="discussion"></a>

## Discussion

Use this method for values that aren’t strings. A predicate on a non-optional type isn’t satisfied when the value is missing, and a predicate on an optional type receives `nil` and decides for itself. A predicate whose input type doesn’t match the value’s type isn’t satisfied.
