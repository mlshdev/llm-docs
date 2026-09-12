> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appconfiguration/setadditionalvalue(_:forkey:)](https://developer.apple.com/documentation/storekit/skoverlay/appconfiguration/setadditionalvalue(_:forkey:))

# setAdditionalValue(\_:forKey:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.

## Declaration

```swift
func setAdditionalValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The value to associate with the `key`.
- `key`: The string that identifies an additional value.

<a id="Discussion"></a>

## Discussion

Set additional values to verify and associate an app installation with an ad campaign. For more information, see [SKAdNetwork](../../skadnetwork.md).

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [additionalValue(forKey:)](additionalvalue%28forkey_%29.md): Returns the object associated with the key.

# setAdditionalValue:forKey: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.

## Declaration

```objectivec
- (void) setAdditionalValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value to associate with the `key`.
- `key`: The string that identifies an additional value.

<a id="Discussion"></a>

## Discussion

Set additional values to verify and associate an app installation with an ad campaign. For more information, see [SKAdNetwork](../../skadnetwork.md).

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [additionalValueForKey:](additionalvalue%28forkey_%29.md): Returns the object associated with the key.
