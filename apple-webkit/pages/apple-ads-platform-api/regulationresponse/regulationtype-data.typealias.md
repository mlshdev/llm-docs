> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/regulationresponse/regulationtype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/regulationresponse/regulationtype-data.typealias)

# RegulationResponse.RegulationType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The category of regulatory disclosure this response answers.

## Declaration

```
string RegulationResponse.RegulationType
```

## Possible Values

- `CAC`: Disclosure required under CAC regulation, at the campaign level.
- `CAMPAIGN_SAPIN_LAW`: Disclosure required under Sapin Law regulation, at the campaign level.
- `ORG_SAPIN_LAW`: Disclosure required under Sapin Law regulation, at the organization level.

<a id="Discussion"></a>

## Discussion

This mirrors the `regulationType` set when the response was created, and continues to determine which `responseValue` options are valid.

<a id="Example"></a>

### Example

```json
{
  "regulationType": "CAMPAIGN_SAPIN_LAW",
  "responseValue": "AGENT"
}
```
