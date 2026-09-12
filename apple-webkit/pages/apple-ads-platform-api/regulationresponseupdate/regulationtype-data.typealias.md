> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/regulationresponseupdate/regulationtype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/regulationresponseupdate/regulationtype-data.typealias)

# RegulationResponseUpdate.RegulationType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The category of regulatory disclosure being answered.

## Declaration

```
string RegulationResponseUpdate.RegulationType
```

## Possible Values

- `CAC`: Disclosure required under CAC regulation, at the campaign level.
- `CAMPAIGN_SAPIN_LAW`: Disclosure required under Sapin Law regulation, at the campaign level.
- `ORG_SAPIN_LAW`: Disclosure required under Sapin Law regulation, at the organization level.

<a id="Discussion"></a>

## Discussion

Each type maps to a different set of valid `responseValue` options, and applies at either the campaign level (`CAC`, `CAMPAIGN_SAPIN_LAW`) or the organization level (`ORG_SAPIN_LAW`).

<a id="Example"></a>

### Example

```json
{
  "regulationType": "CAMPAIGN_SAPIN_LAW",
  "responseValue": "AGENT"
}
```
