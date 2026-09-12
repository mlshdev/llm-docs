> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate/entityidentifiers(_:)](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate/entityidentifiers(_:))

# entityIdentifiers(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Creates a predicate that matches donations that refer to one of the specified entities.

## Declaration

```swift
static func entityIdentifiers(_ identifiers: [EntityIdentifier]) -> IntentDonationMatchingPredicate
```

## Parameters

- `identifiers`: An array of identifiers for your app’s entities. Typically, you find an entity’s identifier in its `id` property, which you add as part of your implementation of the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.

<a id="return-value"></a>

## Return Value

A predicate that matches a donation if it contains at least one of the specified entities.

<a id="discussion"></a>

## Discussion

When you delete the data for multiple entities from your app’s data store, use this method to remove donations that refer to one of those [AppEntity](../appentity.md) instances. This predicate matches all donations in which the app intent contains a parameter with one of the specified entities. Removing those donations prevents the system from suggesting an app intent that your app can’t run because it doesn’t have the needed data.
