> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate/entityidentifier(_:)](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate/entityidentifier(_:))

# entityIdentifier(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a predicate to match any donation that contains the specified entity in a parameter.

## Declaration

```swift
static func entityIdentifier(_ identifier: EntityIdentifier) -> IntentDonationMatchingPredicate
```

## Parameters

- `identifier`: The identifier for one of your app’s entities. Typically, you find an entity’s identifier in its `id` property, which you add as part of your implementation of the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.

<a id="return-value"></a>

## Return Value

A predicate that matches a donation if it contains a parameter with the specified entity.

<a id="discussion"></a>

## Discussion

When you delete the data for an entity from your app’s data store, use this method to remove any donations that refer to that [AppEntity](../appentity.md) instance. This predicate matches all donations in which the app intent contains a parameter with the specified entity. Removing those donations prevents the system from suggesting an app intent that your app can’t run because it doesn’t have the needed data.

## See Also

### Creating a predicate

- [donationIdentifier(\_:)](donationidentifier%28__%29.md): Creates a predicate that matches a single, previous donation.
- [intentType(\_:entityIdentifier:)](intenttype%28__entityidentifier_%29.md): Creates a predicate to match app intents of the specified type that optionally refers to a specific entity.
