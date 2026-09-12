> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appclipconfiguration/providertoken](https://developer.apple.com/documentation/storekit/skoverlay/appclipconfiguration/providertoken)

# providerToken (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.

## Declaration

```swift
var providerToken: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When you set a provider token, you must also set the [campaignToken](../appconfiguration/campaigntoken.md).

When promoting your own apps, set your own provider token using `providerToken`. This allows you to track a promotion’s effectiveness independently from any affiliate campaign that shares the same campaign token.

When promoting apps by other developers, set `providerToken` using their provider token. This allows those developers to track the effectiveness of your App Store Connect Analytics campaign.

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [setAdditionalValue(\_:forKey:)](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValue(forKey:)](additionalvalue%28forkey_%29.md): Returns the object associated with the key.

# providerToken (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * providerToken;
```

<a id="Discussion"></a>

## Discussion

When you set a provider token, you must also set the [campaignToken](../appconfiguration/campaigntoken.md).

When promoting your own apps, set your own provider token using `providerToken`. This allows you to track a promotion’s effectiveness independently from any affiliate campaign that shares the same campaign token.

When promoting apps by other developers, set `providerToken` using their provider token. This allows those developers to track the effectiveness of your App Store Connect Analytics campaign.

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [setAdditionalValue:forKey:](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValueForKey:](additionalvalue%28forkey_%29.md): Returns the object associated with the key.
