> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression](https://developer.apple.com/documentation/adattributionkit/appimpression)

# AppImpression

**Framework:** AdAttributionKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A structure that represents an attributable impression you generate in response to a person’s interaction with an ad in an app.

## Declaration

```swift
struct AppImpression
```

## Mentioned In

- [Generating JWS impressions](generating-jws-impressions.md)
- [Presenting ads in your app](presenting-ads-in-your-app.md)

<a id="Discussion"></a>

## Discussion

To record a view-through impression, call [beginView()](appimpression/beginview%28%29.md) when the ad content corresponding to the impression becomes visible, and [endView()](appimpression/endview%28%29.md) when the ad content disappears. The advertisement needs to be visible for at least two seconds for AdAttributionKit to record a view through impression; otherwise, the framework throws an error.

> **Important**

>  Regenerate an `AppImpression` for each ad you show. Don’t reuse `AppImpression` structures across multiple ads.

To support click-through attribution, place a [UIEventAttributionView](https://developer.apple.com/documentation/uikit/uieventattributionview) over the ad content and call  either [handleTap(reengagementURL:)](appimpression/handletap%28reengagementurl_%29.md) or [handleTap()](appimpression/handletap%28%29.md) after a person taps the ad content. The framework then validates that a person taps a `UIEventAttributionView` before recording the impression, and throws an error if it can’t validate that a tap occurred in a `UIEventAttributionView`.

After the framework validates the tap, it records the impression and then attempts to launch one of the user’s installed marketplaces to show the product page for the advertised app. The system uses the advertised item ID from the JSON Web Signature (JWS) string you provide to initialize the `AppImpression`, in addition to the user’s preferred marketplaces, to help determine which marketplace the framework needs to launch. If the app is already installed, the framework launches into the app’s Home Screen instead.

In iOS 18 and later, `AppImpression` supports reengagement for click-through interactions when the advertised app is already installed on the device. The system can deep-link into the advertised app when using [handleTap(reengagementURL:)](appimpression/handletap%28reengagementurl_%29.md). Click-through impressions can also qualify for reengagement postbacks by opting in for reengagement in the impression JWS. For more information about opting in for re-engagement, see [Generating JWS impressions](generating-jws-impressions.md).

## Topics

### Creating an ad impression

- [init(compactJWS:)](appimpression/init%28compactjws_%29.md): Creates a new app impression with the provided compact JSON Web Signature (JWS).

### Displaying view-through ads

- [beginView()](appimpression/beginview%28%29.md): Begins recording a view-through impression when ad content corresponding to the impression becomes visible.
- [endView()](appimpression/endview%28%29.md): Ends the view-through impression when the ad content corresponding to the impression disappears.
- [handleView()](appimpression/handleview%28%29.md): Handles a view through ad impression.

### Processing interactions with click-through ads

- [handleTap()](appimpression/handletap%28%29.md): Processes click-through interactions on your custom rendered ad content.
- [handleTap(reengagementURL:)](appimpression/handletap%28reengagementurl_%29.md): Processes click-through interactions on your custom rendered ad content, and delivers a URL to the advertised app if it’s installed.

### Accessing ad impression properties

- [adNetworkID](appimpression/adnetworkid.md): The advertising network ID.
- [advertisedItemID](appimpression/advertiseditemid.md): The advertised item’s ID.
- [compactJWSRepresentation](appimpression/compactjwsrepresentation.md): A string that presents the compact representation of the impression’s JSON Web Signature (JWS).
- [eligibleForReengagement](appimpression/eligibleforreengagement.md): A Boolean value that indicates whether this impression is eligible for reengagement.
- [id](appimpression/id.md): The impression’s unique ID.
- [keyID](appimpression/keyid.md): The JSON Web Signature (JWS) key ID.
- [publisherItemID](appimpression/publisheritemid.md): The publisher app’s item ID.
- [sourceID](appimpression/sourceid.md): A four-digit integer that ad networks define to represent the ad campaign.
- [timestamp](appimpression/timestamp.md): The impression’s timestamp, in milliseconds since 1970.

### Checking device support

- [isSupported](appimpression/issupported.md): A Boolean value that indicates whether the framework supports app impressions on a person’s device.

### Comparing and hashing ad impressions

- [==(\_:\_:)](appimpression/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.
- [hash(into:)](appimpression/hash%28into_%29.md): A function that hashes the essential components of the value by passing them into the hasher.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
