> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/paymentmodel](https://developer.apple.com/documentation/apple-ads-platform-api/paymentmodel)

# PaymentModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of billing models that determine payment method and budget availability for an ad account.

## Declaration

```
string PaymentModel
```

## Possible Values

- `PAYG`: Pay as You Go. The default billing model when no payment model is configured. Budget orders are not available with this model.
- `LOC`: Line of Credit. A monthly invoicing model required to use budget orders. Invoicing details are available in [InvoiceDetail](invoicedetail.md).

## See Also

- [BudgetSystemStatus](budgetsystemstatus.md): The system-derived operational state of a budget order.
- [BudgetSystemStatusReason](budgetsystemstatusreason.md): A reason code that explains why a budget or budget order has its current system status.
