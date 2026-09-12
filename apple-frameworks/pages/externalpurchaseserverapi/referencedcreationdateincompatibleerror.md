> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/referencedcreationdateincompatibleerror](https://developer.apple.com/documentation/externalpurchaseserverapi/referencedcreationdateincompatibleerror)

# ReferencedCreationDateIncompatibleError

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Object  
**Availability:** External Purchase Server API 1.0.0+

An error indicating the referenced line item has a creation date after the line item’s creation date.

## Declaration

```
object ReferencedCreationDateIncompatibleError
```

## Properties

- `errorCode` — `integer` (required): **Allowed values:** `31`
- `errorMessage` — `string` (required): **Allowed values:** `The referenced line item has a creation date after the line item's creation date.`
- `fieldName` — `string` (required): **Allowed values:** `creationDate`
- `lineItemId` — `lineItemId` (required):

## See Also

### Error objects for reports

- [DateTooFarInPastError](datetoofarinpasterror.md): An error indicating that a provided date is too far in the past.
- [DuplicateTokenStatusNotAllowedError](duplicatetokenstatusnotallowederror.md): An error indicating the duplicate token status is not allowed for the associated token type.
- [DuplicateValueError](duplicatevalueerror.md): An error indicating the field’s value is already submitted and a duplicate value is not expected.
- [ErroneousLineItemReferencedByValidLineItemError](erroneouslineitemreferencedbyvalidlineitemerror.md): An error indicating the line item has status erroneously submitted but is referenced by a non-erroneously submitted line item.
- [ErroneouslySubmittedNotRestatementError](erroneouslysubmittednotrestatementerror.md): An error indicating the erroneously submitted line item was not marked as restatement.
- [ExchangeRateMismatchError](exchangeratemismatcherror.md): An error indicating the refund’s referenced buy line item has a different exchange rate.
- [FieldNotAllowedError](fieldnotallowederror.md): An error indicating the provided field is not allowed.
- [FutureDateError](futuredateerror.md): An error indicating the provided date field is in the future and future values are not allowed.
- [IncorrectAmountTaxInclusiveError](incorrectamounttaxinclusiveerror.md): An error indicating the tax exclusive amount plus the tax amount does not equal the tax inclusive amount.
- [IncorrectNetAmountError](incorrectnetamounterror.md): An error indicating the net amount value does not match the expected value.
- [InvalidTaxInclusiveAmountForSubscriptionPaymentError](invalidtaxinclusiveamountforsubscriptionpaymenterror.md): An error indicating the tax inclusive amount must be positive for line items with a subscription payment subscription event.
- [LineItemCreationDateOutOfRangeError](lineitemcreationdateoutofrangeerror.md): An error indicating the line item’s creation date is outside the active range of the token.
- [LineItemStatusRegressionError](lineitemstatusregressionerror.md): An error indicating the status can’t be marked as no line item or unrecognized token after it was previously reported as a line item.
- [LineItemsNotAllowedForStatusError](lineitemsnotallowedforstatuserror.md): An error indicating a line item was provided for an external purchase ID that has the status no line item or unrecognized token.
- [MaximumLengthExceededError](maximumlengthexceedederror.md): An error indicating the field’s maximum length is exceeded.
