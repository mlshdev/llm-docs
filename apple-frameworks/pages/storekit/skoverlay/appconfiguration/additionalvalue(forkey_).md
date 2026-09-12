> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appconfiguration/additionalvalue(forkey:)](https://developer.apple.com/documentation/storekit/skoverlay/appconfiguration/additionalvalue(forkey:))

# additionalValue(forKey:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the object associated with the key.

## Declaration

```swift
func additionalValue(forKey key: String) -> Any?
```

## Parameters

- `key`: The string that identifies an additional value.

<a id="return-value"></a>

## Return Value

The associated value of the key.

<a id="Discussion"></a>

## Discussion

Additional values are values you use to verify and associate an app installation with an ad campaign. For more information, see [SKAdNetwork](../../skadnetwork.md).

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue(\_:forKey:)](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.

# additionalValueForKey: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the object associated with the key.

## Declaration

```objectivec
- (id) additionalValueForKey:(NSString *) key;
```

## Parameters

- `key`: The string that identifies an additional value.

<a id="return-value"></a>

## Return Value

The associated value of the key.

<a id="Discussion"></a>

## Discussion

Additional values are values you use to verify and associate an app installation with an ad campaign. For more information, see [SKAdNetwork](../../skadnetwork.md).

## See Also

### Verifying Advertising Campaigns

- [campaignToken](campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue:forKey:](setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.
