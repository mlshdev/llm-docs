> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentitydefinition/expectidentifier(_:)

# expectIdentifier(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an expectation that an app entity is the instance with the specified identifier.

## Declaration

```swift
func expectIdentifier(_ identifier: String) -> AppEntityIdentifierExpectation
```

## Parameters

- `identifier`: The identifier of the entity instance to expect.

<a id="return-value"></a>

## Return Value

An expectation that compares an entity’s identifier to `identifier`.

<a id="discussion"></a>

## Discussion

Use the returned expectation for an intent parameter, an intent result, or a property that holds an entity. Call [expect](../appentityidentifierexpectation/expect.md) on it to also check the instance’s properties. For example:

```swift
let workCalendarExpectation = createEventIntentDefinition.expect(
    calendar: calendarEntityDefinition.expectIdentifier(
        "edea53fb-90b7-4481-afc7-d86e2dd0d27d"
    )
)
```
