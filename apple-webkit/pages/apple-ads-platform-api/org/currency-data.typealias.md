> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/org/currency-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/org/currency-data.typealias)

# Org.Currency

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The currency used by the organization.

## Declaration

```
string Org.Currency
```

## Possible Values

- `USD`: United States Dollar.
- `RMB`: Renminbi. A legacy alias for `CNY`, not an ISO 4217 code. Prefer `CNY`.
- `AUD`: Australian Dollar.
- `CAD`: Canadian Dollar.
- `EUR`: Euro.
- `GBP`: British Pound Sterling.
- `JPY`: Japanese Yen.
- `MXN`: Mexican Peso.
- `NZD`: New Zealand Dollar.
- `RUB`: Russian Ruble.
- `CNY`: Chinese Yuan. The ISO 4217 code for the same currency as `RMB`.
- `INR`: Indian Rupee.
- `BRL`: Brazilian Real.
- `IDR`: Indonesian Rupiah.

<a id="Discussion"></a>

## Discussion

This currency is set once for the organization, including legacy organizations that still report amounts in `RMB` rather than its ISO 4217 equivalent `CNY`.

<a id="Example"></a>

### Example

```json
{
  "currency": "USD"
}
```
