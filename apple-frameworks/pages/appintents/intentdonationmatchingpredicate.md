> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdonationmatchingpredicate](https://developer.apple.com/documentation/appintents/intentdonationmatchingpredicate)

# IntentDonationMatchingPredicate

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type you use to specify previously donated app intents.

## Declaration

```swift
struct IntentDonationMatchingPredicate
```

<a id="overview"></a>

## Overview

An `IntentDonationMatchingPredicate` matches one or more app intent donations you made previously. Use this type to specify the donations you plan to delete using the [deleteDonations(matching:)](intentdonationmanager/deletedonations%28matching_%29.md) method of [IntentDonationManager](intentdonationmanager.md). You can create predicates to match donations with specific identifiers, or to match donations that contain specific app intents or entities. For example, if someone deletes data in your app, you can create a predicate to remove donations that refer to that data.

## Topics

### Creating a predicate

- [donationIdentifier(\_:)](intentdonationmatchingpredicate/donationidentifier%28__%29.md): Creates a predicate that matches a single, previous donation.
- [entityIdentifier(\_:)](intentdonationmatchingpredicate/entityidentifier%28__%29.md): Creates a predicate to match any donation that contains the specified entity in a parameter.
- [intentType(\_:entityIdentifier:)](intentdonationmatchingpredicate/intenttype%28__entityidentifier_%29.md): Creates a predicate to match app intents of the specified type that optionally refers to a specific entity.

### Type Methods

- [donationIdentifiers(\_:)](intentdonationmatchingpredicate/donationidentifiers%28__%29.md): Creates a predicate that matches one or more previous donations.
- [entityIdentifiers(\_:)](intentdonationmatchingpredicate/entityidentifiers%28__%29.md): Creates a predicate that matches donations that refer to one of the specified entities.

## See Also

### Donation management

- [IntentDonationManager](intentdonationmanager.md): A type you use to teach the system about the actions people take using your app.
- [IntentDonationIdentifier](intentdonationidentifier.md): An opaque type that identifies a specific donation to the system.
