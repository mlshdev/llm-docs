> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroup/cpacap-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgroup/cpacap-data.dictionary)

# AdGroup.CpaCap

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.

## Declaration

```
object AdGroup.CpaCap
```

## Properties

- `value` — `Money`: The target CPA monetary value. Object with `amount` (string) and `currency` (string) properties.

<a id="Discussion"></a>

## Discussion

Existing ad groups may still carry a `cpaCap` value, but new bid strategy configurations should express the same cost target through `bidStrategy`’s `MAX_CONVERSIONS` goal instead.

<a id="Example"></a>

### Example

```json
{
  "cpaCap": {
    "value": {
      "amount": "50.00",
      "currency": "USD"
    }
  }
}
```

See [CPAGoal](../cpagoal.md) for the full field reference.
