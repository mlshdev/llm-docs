> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectationcallable/dynamicallycall(withkeywordarguments:)

# dynamicallyCall(withKeywordArguments:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an expectation from value expectations that you label with parameter or property names.

## Declaration

```swift
func dynamicallyCall(withKeywordArguments args: KeyValuePairs<String, Argument?>) -> Expectation
```

## Parameters

- `args`: The value expectations, keyed by argument label. A `nil` value leaves the corresponding parameter or property unchecked.

<a id="return-value"></a>

## Return Value

An expectation that checks each labeled parameter or property against its value expectation.

<a id="discussion"></a>

## Discussion

You don’t call this method directly. Swift calls it when you call the callable with labeled arguments. Give every argument a label, and use each label only once; otherwise, the method stops with a precondition failure.
