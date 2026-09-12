> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate/intenttype(_:entityidentifier:)](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate/intenttype(_:entityidentifier:))

# intentType(\_:entityIdentifier:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a predicate to match app intents of the specified type that optionally refers to a specific entity.

## Declaration

```swift
static func intentType(_ intentType: any AppIntent.Type, entityIdentifier: EntityIdentifier? = nil) -> IntentDonationMatchingPredicate
```

## Parameters

- `intentType`: The app intent type to match against.
- `entityIdentifier`: The identifier for one of your app’s entities. Typically, you find an entity’s identifier in its `id` property, which you add as part of your implementation of the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.

<a id="return-value"></a>

## Return Value

A predicate that matches a donation when app intents of the provided type contain the entity you specified.

<a id="discussion"></a>

## Discussion

Use this method to delete all donations with a specific type of app intent. Include a value in the `entityIdentifier` parameter to limit the deletions to those that also reference a specific [AppEntity](../appentity.md) instance. Remove donations to prevent the system from suggesting those actions in the future.

## See Also

### Creating a predicate

- [donationIdentifier(\_:)](donationidentifier%28__%29.md): Creates a predicate that matches a single, previous donation.
- [entityIdentifier(\_:)](entityidentifier%28__%29.md): Creates a predicate to match any donation that contains the specified entity in a parameter.
