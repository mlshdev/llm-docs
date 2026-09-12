> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate/donationidentifier(_:)](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate/donationidentifier(_:))

# donationIdentifier(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a predicate that matches a single, previous donation.

## Declaration

```swift
static func donationIdentifier(_ identifier: IntentDonationIdentifier) -> IntentDonationMatchingPredicate
```

## Parameters

- `identifier`: A donation identifier you received after donating an app intent.

<a id="return-value"></a>

## Return Value

A predicate that matches the specified donation.

<a id="discussion"></a>

## Discussion

When you donate an app intent using the methods of [IntentDonationManager](../intentdonationmanager.md), the method returns a unique identifier for that donation. Use this method to create a predicate that matches only the donation you specified.

## See Also

### Creating a predicate

- [entityIdentifier(\_:)](entityidentifier%28__%29.md): Creates a predicate to match any donation that contains the specified entity in a parameter.
- [intentType(\_:entityIdentifier:)](intenttype%28__entityidentifier_%29.md): Creates a predicate to match app intents of the specified type that optionally refers to a specific entity.
