> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/app-store-receipt-data-types](https://developer.apple.com/documentation/appstorereceipts/app-store-receipt-data-types)

# App Store receipt data types

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** API Collection

Data types of objects that return in the receipt.

## Topics

### Transaction identifiers

- [original_transaction_id](original_transaction_id.md): Deprecated. The transaction identifier of the original purchase.
- [transaction_id](transaction_id.md): Deprecated. A unique identifier for a transaction, such as a purchase, restore, or renewal.
- [app_account_token](app_account_token.md): Deprecated. The UUID that an app optionally generates to map a customer’s in-app purchase with its resulting App Store transaction.

### Receipt and subscription status

- [status](status.md): Deprecated. The status of the app receipt.
- [auto_renew_status](auto_renew_status.md): Deprecated. The renewal status for the auto-renewable subscription.
- [is_in_billing_retry_period](is_in_billing_retry_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the billing retry period.
- [is_in_intro_offer_period](is_in_intro_offer_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the introductory price period.
- [is_trial_period](is_trial_period.md): Deprecated. An indicator of whether an auto-renewable subscription is in the free trial period.

### Dates and intent

- [expiration_intent](expiration_intent.md): Deprecated. The reason a subscription expires.
- [cancellation_date_ms](cancellation_date_ms.md): Deprecated. The time and date that the App Store refunds a transaction or revokes it from Family Sharing.
- [expires_date_ms](expires_date_ms.md): Deprecated. The time, in milliseconds, a subscription expires or renews.

### Promotions and offers

- [promotional_offer_id](promotional_offer_id.md): Deprecated. The identifier of the promotional offer for an auto-renewable subscription that the user redeems.
- [offer_code_ref_name](offer_code_ref_name.md): Deprecated. The offer-reference name of the subscription offer code that the customer redeems.

### Family Sharing

- [in_app_ownership_type](in_app_ownership_type.md): Deprecated. The relationship of the user with the family-shared purchase to which they have access.
