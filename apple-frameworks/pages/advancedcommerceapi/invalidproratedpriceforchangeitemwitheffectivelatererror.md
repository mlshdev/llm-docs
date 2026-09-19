> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/advancedcommerceapi/invalidproratedpriceforchangeitemwitheffectivelatererror

# InvalidProratedPriceForChangeItemWithEffectiveLaterError

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.2+

## Declaration

```
object InvalidProratedPriceForChangeItemWithEffectiveLaterError
```

## Properties

- `errorCode` — `number`: **Allowed values:** `4000222`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. A prorated price shouldn't be present to change items with the change taking effect later.`

## Mentioned In

- [Advanced Commerce API changelog](changelog.md)

## See Also

### Error codes

- [ACAPriceIncreaseIsNotCurrentlySupportedInIndiaError](acapriceincreaseisnotcurrentlysupportedinindiaerror.md)
- [AlreadyRefundedError](alreadyrefundederror.md)
- [AtLeastOneItemError](atleastoneitemerror.md)
- [AtLeastOneOfDisplayNameOrDescriptionError](atleastoneofdisplaynameordescriptionerror.md)
- [BillingCycleResetWithEffectiveLaterError](billingcycleresetwitheffectivelatererror.md)
- [ChangeItemNotFoundError](changeitemnotfounderror.md)
- [CurrentSKULengthExceededError](currentskulengthexceedederror.md)
- [DependentSKUsCannotBeChainedError](dependentskuscannotbechainederror.md)
- [DependentSKUsCannotBeSharedError](dependentskuscannotbesharederror.md)
- [DescriptionLengthExceededError](descriptionlengthexceedederror.md)
- [DisplayNameLengthExceededError](displaynamelengthexceedederror.md)
- [EmptyAddChangeItemsError](emptyaddchangeitemserror.md)
- [FreeTrialOfferMustUsePeriodCountOfOneError](freetrialoffermustuseperiodcountofoneerror.md)
- [GeneralInternalError](generalinternalerror.md)
- [GeneralInternalRetryableError](generalinternalretryableerror.md)
