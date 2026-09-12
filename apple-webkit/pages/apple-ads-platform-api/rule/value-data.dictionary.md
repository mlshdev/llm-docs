> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/rule/value-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/rule/value-data.dictionary)

# Rule.Value

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The comparison value for a targeting rule, as either a single string or an array of strings.

## Declaration

```
object Rule.Value
```

<a id="Discussion"></a>

## Discussion

The `Rule.value` field accepts either a single string or an array of strings, depending on the rule’s `operator`. Pass a string for `EQUALS` and `NOT_EQUALS`. Pass an array of strings for `IN` and `NOT_IN`.

The expected string format also depends on `field`: a plain name for `adminArea` and `postalCode`, a pipe-delimited `countryOrRegion|adminArea|locality` string for `locality`, and a location ID string for `locationId`. See [Rule](../rule.md) for the full list of supported `field` values.

<a id="Example"></a>

### Example

```json
{
  "field": "locality",
  "operator": "IN",
  "value": ["US|New York|Brooklyn", "US|California|San Francisco"]
}
```
