> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/event](https://developer.apple.com/documentation/tipkit/tips/event)

# Event

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A repeatable user-defined action.

## Declaration

```swift
struct Event<DonationInfo> where DonationInfo : Decodable, DonationInfo : Encodable, DonationInfo : Sendable
```

<a id="Overview"></a>

## Overview

Use an event when you want to track an action that can occur one or more times in your app (such as a user logging in). Then use [donate()](event/donate%28%29.md) to donate to the event when the action occurs, increasing the event count by one.

> **Note**

> In order to remain performant, by default events only query their most recent 1000 donations.

<a id="Creating-an-event-with-no-associated-donation-value"></a>

### Creating an event with no associated donation value

The example below creates a `landmarksAppDidOpen` event with no associated donation value and donates it anytime `ContentView` appears:

```swift
struct LandmarkTips: App {
    static let landmarksAppDidOpen = Tips.Event(id: "landmarksAppDidOpen")

    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear { Self.landmarksAppDidOpen.sendDonation() }
        }
    }
}
```

The example below creates a display rule for `LandmarkFeatureTip` based on the `landmarksAppDidOpen` event.

```swift
struct LandmarkFeatureTip: Tip {
    var rules: [Rule] {
        // Tip will only display when the landmarksAppDidOpen event has been donated 3 or more times in the last week.
        #Rule(LandmarkTips.landmarksAppDidOpen) {
            $0.donations.donatedWithin(.week).count >= 3
        }
    }
}
```

<a id="Creating-an-event-with-an-associated-donation-value"></a>

### Creating an event with an associated donation value

The example below creates a `didViewLandmarkDetail` event with an associated donation value and donates it anytime the `LandmarkDetail` appears:

```swift
struct LandmarkDetail: View {
    static let didViewLandmarkDetail = Tips.Event<DidViewLandmark>(id: "didViewLandmarkDetail")

    struct DidViewLandmark: Codable, Sendable {
        let landmarkID: Int
        let landmarkName: String
    }

    var landmark: Landmark

    var body: some View {
        ScrollView {
            MapView(coordinate: landmark.locationCoordinate)
        }
        .onAppear {
            Self.didViewLandmarkDetail.sendDonation(.init(landmarkID: landmark.id, landmarkName: landmark.name))
        }
    }
}
```

The example below creates a display rule for `LandmarkDetailTip` based on the `didViewLandmarkDetail` event.

```swift
struct LandmarkDetailTip: Tip {
    var rules: [Rule] {
        // Tip will only display when the didViewLandmarkDetail has been donated 3 or more times for landmarks not named "Wilbere Bowl".
        #Rule(LandmarkDetail.didViewLandmarkDetail) {
            $0.donations.filter({ $0.landmarkName != "Wilbere Bowl" }).count > 3
        }
    }
}
```

<a id="Filtering-an-events-donations"></a>

### Filtering an event’s donations

TipKit provides methods on `Sequence` for filtering an event’s donations within rule predicates.

Use `Swift/Sequence/donatedWithin(_:)` to filter donations by recency:

```swift
#Rule(AppEvents.didLogin) {
    $0.donations.donatedWithin(.week).count >= 3
}
```

Use `Swift/Sequence/largestSubset(groupedBy:)` and `Swift/Sequence/smallestSubset(groupedBy:)` to find the most or least frequent donation values:

```swift
#Rule(LandmarkDetail.didViewLandmarkDetail) {
    // Show tip when the most-viewed landmark has been viewed 5+ times.
    $0.donations.largestSubset(groupedBy: \.landmarkID).count >= 5
}
```

These methods can be combined to build complex eligibility conditions:

```swift
#Rule(LandmarkDetail.didViewLandmarkDetail) {
    // Show tip when the least-viewed landmark in the past month has been viewed at least twice.
    $0.donations.donatedWithin(.month).smallestSubset(groupedBy: \.landmarkID).count >= 2
}
```

## Topics

### Initializers

- [init(id:)](event/init%28id_%29-99edo.md): Creates an event.
- [init(id:donationLimit:)](event/init%28id_donationlimit_%29-7tgi1.md): Creates an event.

### Initializers with a donation value

- [init(id:)](event/init%28id_%29-3edd4.md): Creates an event with an associated donation value.
- [init(id:donationLimit:)](event/init%28id_donationlimit_%29-1d1hy.md): Creates an event with an associated donation value.

### Donations

- [Donation](event/donation.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. A repeatable user-defined action.
- [donations](event/donations.md): Returns an events existing donations.

### Add Donations

- [donate()](event/donate%28%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event with no associated `Donation` value.
- [donate(\_:)](event/donate%28__%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event along with its associated `Donation` value.
- [sendDonation(\_:)](event/senddonation%28__%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Asynchronously donates an event with no associated `Donation` value.
- [sendDonation(\_:\_:)](event/senddonation%28____%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Asynchronously donates an event along with its associated `Donation` value.

### Delete Donations

- [deleteDonations()](event/deletedonations%28%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Deletes an event’s existing donations.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Rule](rule.md): A condition to meet before displaying a tip.
