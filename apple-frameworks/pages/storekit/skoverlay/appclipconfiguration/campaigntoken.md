> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appclipconfiguration/campaigntoken](https://developer.apple.com/documentation/storekit/skoverlay/appclipconfiguration/campaigntoken)

# campaignToken (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A token you use to represent an ad campaign and measure its effectiveness.

## Declaration

```swift
var campaignToken: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A campaign token is a 40-byte string that represents an ad campaign. By setting the `campaignToken`, you can measure the effectiveness of an Apple Services Performance Partners Program link or an App Store Connect Analytics campaign.

For more information, see [Apple Services Performance Partners Program](https://apple.com/itunes/affiliates) and [App Store Connect](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/About.html#//apple_ref/doc/uid/TP40011225).

## See Also

### Verifying Advertising Campaigns

- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue(\_:forKey:)](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValue(forKey:)](additionalvalue%28forkey_%29.md): Returns the object associated with the key.

# campaignToken (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A token you use to represent an ad campaign and measure its effectiveness.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * campaignToken;
```

<a id="Discussion"></a>

## Discussion

A campaign token is a 40-byte string that represents an ad campaign. By setting the `campaignToken`, you can measure the effectiveness of an Apple Services Performance Partners Program link or an App Store Connect Analytics campaign.

For more information, see [Apple Services Performance Partners Program](https://apple.com/itunes/affiliates) and [App Store Connect](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/About.html#//apple_ref/doc/uid/TP40011225).

## See Also

### Verifying Advertising Campaigns

- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue:forKey:](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValueForKey:](additionalvalue%28forkey_%29.md): Returns the object associated with the key.
