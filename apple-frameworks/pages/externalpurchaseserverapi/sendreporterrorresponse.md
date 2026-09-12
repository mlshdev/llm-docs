> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/sendreporterrorresponse](https://developer.apple.com/documentation/externalpurchaseserverapi/sendreporterrorresponse)

# SendReportErrorResponse

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Object  
**Availability:** External Purchase Server API 1.0.0+

An error response that indicates your external purchase report didn’t succeed, including error details for the line items in your report.

## Declaration

```
object SendReportErrorResponse
```

## Properties

- `errors` — `[*]` (required): **Allowed types:** `DuplicateValueError`, `ReportingCurrencyMismatchError`, `NotFoundError`, `OmittedFieldError`, `FieldNotAllowedError`, `FutureDateError`, `UnknownEnumError`, `LineItemStatusRegressionError`, `MissingLineItemsForStatusError`, `LineItemsNotAllowedForStatusError`, `IncorrectAmountTaxInclusiveError`, `IncorrectNetAmountError`, `SelfReferenceError`, `ReferenceInvalidSubscriptionEventError`, `NegativeValueNotAllowedError`, `PositiveValueRequiredError`, `StartDateAfterEndDateError`, `ReportingCurrencyExchangeNotAllowedError`, `MaximumLengthExceededError`, `ErroneouslySubmittedNotRestatementError`, `ReferenceLineItemNotABuyError`, `ErroneousLineItemReferencedByValidLineItemError`, `TaxCountryMismatchError`, `NetAmountMismatchError`, `ValidLineItemReferencesErroneousLineItemError`, `SimultaneousSubmissionError`, `DateTooFarInPastError`, `RefundReferencedByRefundError`, `NonInitialBuyReferencedByBuyError`, `RepeatErroneousSubmissionError`, `ReferencedCreationDateIncompatibleError`, `PricingCurrencyMismatchError`, `ExchangeRateMismatchError`, `SubscriptionStartNonZeroDaysPaidServiceError`, `InvalidTaxInclusiveAmountForSubscriptionPaymentError`, `LineItemCreationDateOutOfRangeError`, `DuplicateTokenStatusNotAllowedError`, `RestatementCreationDateMismatchError`, `RestatementNotAllowedCreationDateError`, `RefundNotAllowedCreationDateError`

## See Also

### External purchase reporting

- [Send External Purchase Report](send-external-purchase-report.md): Report required information about external purchase tokens and associated transactions.
- [ExternalPurchaseReport](externalpurchasereport.md): The contents of an external purchase report for a single token.
- [SendReportSuccessResponse](sendreportsuccessresponse.md): A response that contains the request identifier and indicates the server successfully received your external purchase report.
