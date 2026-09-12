> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate/donationidentifiers(_:)](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate/donationidentifiers(_:))

# donationIdentifiers(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Creates a predicate that matches one or more previous donations.

## Declaration

```swift
static func donationIdentifiers(_ identifiers: [IntentDonationIdentifier]) -> IntentDonationMatchingPredicate
```

## Parameters

- `identifiers`: An array of donation identifiers you received after donating app intents.

<a id="return-value"></a>

## Return Value

A predicate that matches the specified donations.

<a id="discussion"></a>

## Discussion

When you donate an app intent using the methods of [IntentDonationManager](../intentdonationmanager.md), the method returns a unique identifier for that donation. Use this method to create a predicate that matches all of the donations you specified.
