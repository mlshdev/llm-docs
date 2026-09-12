> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/ad/systemstatuslimitingreasons-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/ad/systemstatuslimitingreasons-data.typealias)

# Ad.SystemStatusLimitingReasons

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Reasons that limit an ad’s delivery capacity without fully stopping it.

## Declaration

```
string Ad.SystemStatusLimitingReasons
```

## Possible Values

- `CREATIVE_POLICY_ISSUES`: The ad creative associated with this ad has policy violations that limit but do not fully stop delivery.

<a id="Discussion"></a>

## Discussion

Unlike [Ad.SystemStatusReasons](systemstatusreasons-data.typealias.md), these codes flag conditions, such as creative policy issues, that reduce delivery rather than stop it outright.

<a id="Example"></a>

### Example

```json
{
  "systemStatusLimitingReasons": ["CREATIVE_POLICY_ISSUES"]
}
```
