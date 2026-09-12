> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/regulationresponseupdate/responsevalue-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/regulationresponseupdate/responsevalue-data.typealias)

# RegulationResponseUpdate.ResponseValue

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The advertiser’s answer to the regulatory disclosure question.

## Declaration

```
string RegulationResponseUpdate.ResponseValue
```

## Possible Values

- `AGENT`: The advertiser is an agent, as defined under the Sapin Law regulation.
- `NOT_AGENT`: The advertiser is not an agent, as defined under the Sapin Law regulation.
- `FRENCH_BUSINESS`: The advertiser is a French business, as defined under the Sapin Law regulation.
- `NOT_FRENCH_BUSINESS`: The advertiser is not a French business, as defined under the Sapin Law regulation.
- `TRUE`: A generic affirmative response.
- `FALSE`: A generic negative response.
- `NOT_ANSWERED`: No response has been provided yet.

<a id="Discussion"></a>

## Discussion

Updating this value only makes sense when the campaign’s `regulationType` still requires the disclosure it answers.

<a id="Example"></a>

### Example

```json
{
  "regulationType": "CAMPAIGN_SAPIN_LAW",
  "responseValue": "AGENT"
}
```

See [RegulationResponseValue](../regulationresponsevalue.md) for additional context.
