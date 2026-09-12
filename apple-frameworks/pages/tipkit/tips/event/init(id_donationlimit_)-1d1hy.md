> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy](https://developer.apple.com/documentation/tipkit/tips/event/init(id:donationlimit:)-1d1hy)

# init(id:donationLimit:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an event with an associated donation value.

## Declaration

```swift
init(id: String, donationLimit: Tips.DonationLimit)
```

## Parameters

- `id`: Unique identifier for persisting the event and its donations.
- `donationLimit`: Maximum number and maximum age of donations this event will persist and query.

<a id="Creating-an-event"></a>

### Creating an event

Create an event when you want display a tip based on an action that can occur one or more times in your app (such as a user logging in). Then use [donate()](donate%28%29.md) to donate to the event when the action occurs, increasing the event count by one.

```swift
struct LandmarkDetailView: View {
    let landmark: Landmark

    var body: some View {
        VStack {
            Text(landmark.name)
            Text(landmark.description)
        }
        .task {
            let donationInfo = DidViewLandmark(landmarkName: landmark.name)
            await Self.didViewLandmark.donate(donationInfo)
        }
    }

    static let didViewLandmark = Event(id: "didViewLandmark")
}
```

<a id="Adding-event-rules"></a>

### Adding event rules

Add tip display rules using the `#Rule` macro to prevent a tip from being displayed until an event has been donated a specific number of times.

```swift
struct FavoriteLandmarkTip: Tip {
    var rules: [Rule] {
        // Tip will only display when the didViewLandmark event has been donated 3 or more times.
        #Rule(LandmarkDetailView.didViewLandmark) {
            $0.donations.count >= 3
        }
    }
}
```

## Topics

### Properties

- [donations](donations.md): Returns an events existing donations.

### Add Donations

- [donate()](donate%28%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event with no associated `Donation` value.
- [donate(\_:)](donate%28__%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Donates an event along with its associated `Donation` value.
- [sendDonation(\_:)](senddonation%28__%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Asynchronously donates an event with no associated `Donation` value.
- [sendDonation(\_:\_:)](senddonation%28____%29.md): Conforms when `DonationInfo` conforms to `Decodable`, `Encodable`, and `Sendable`. Asynchronously donates an event along with its associated `Donation` value.
