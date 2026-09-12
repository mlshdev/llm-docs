> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adaccount/currency-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adaccount/currency-data.typealias)

# AdAccount.Currency

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The currency for the ad account.

## Declaration

```
string AdAccount.Currency
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

The `AdAccount` currency is inherited from the parent org at creation.

<a id="Example"></a>

### Example

```json
{
  "currency": "USD"
}
```
