> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupupdate/cpacap-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupupdate/cpacap-data.dictionary)

# AdGroupUpdate.CpaCap

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.

## Declaration

```
object AdGroupUpdate.CpaCap
```

## Properties

- `value` — `Money`: The updated target CPA monetary value as a `Money` object. See [Money](../money.md).

<a id="Discussion"></a>

## Discussion

Deprecated. Use `bidStrategy` with `MAX_CONVERSIONS` instead.

See [CPAGoalUpdate](../cpagoalupdate.md) for the full field reference.
