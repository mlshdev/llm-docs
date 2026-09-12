> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/changelog](https://developer.apple.com/documentation/advancedcommerceapi/changelog)

# Advanced Commerce API changelog

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Article

Learn about new features and updates in the Advanced Commerce API.

<a id="Overview"></a>

## Overview

Use this changelog to learn about feature updates, deprecations, and removals for the Advanced Commerce API.

<a id="Server-update-April-22-2026"></a>

## Server update – April 22, 2026

- For subscribers in South Korea, if the price increase meets the criteria that requires communication with the customer, the App Store notifies subscribers via email, price increase sheet, and push notification. Previously, developers needed to implement the price-increase communications for South Korea. For more information, see [Handling subscription price changes](handling-subscription-price-changes.md).

<a id="Server-update-March-26-2026"></a>

## Server update – March 26, 2026

- Added the following error code: [MigrationNotAllowedWhenPriceIncreaseCommunicatedError](migrationnotallowedwhenpriceincreasecommunicatederror.md).

<a id="Server-update-March-5-2026"></a>

## Server update — March 5, 2026

- Added additional tax codes for books in [Choosing tax codes for your SKUs](taxcodes.md).

<a id="Server-update-January-23-2026"></a>

## Server update – January 23, 2026

- Added the following error codes: [InvalidProratedPriceForChangeItemWithEffectiveLaterError](invalidproratedpriceforchangeitemwitheffectivelatererror.md) and [FreeTrialOfferMustUsePeriodCountOfOneError](freetrialoffermustuseperiodcountofoneerror.md).

<a id="12-December-10-2025"></a>

## 1.2 – December 10, 2025

- Added the `dependentSKUs` field to the [Change Subscription Price](change-subscription-price.md) endpoint payload for managing subscription price changes. For more information, see [Handling subscription price changes](handling-subscription-price-changes.md).
- Added the following error codes: [ACAPriceIncreaseIsNotCurrentlySupportedInIndiaError](acapriceincreaseisnotcurrentlysupportedinindiaerror.md), [DependentSKUsCannotBeChainedError](dependentskuscannotbechainederror.md), [DependentSKUsCannotBeSharedError](dependentskuscannotbesharederror.md), [InvalidPriceForChangeItemInPriceIncreaseError](invalidpriceforchangeiteminpriceincreaseerror.md), [InvalidSKUProvidedMustBeCurrentSKUSetToRenewError](invalidskuprovidedmustbecurrentskusettorenewerror.md), [ItemCannotBeSpecifiedMultipleTimesError](itemcannotbespecifiedmultipletimeserror.md), and [PriceChangeCannotBeIssuedWhenAlreadyCommunicatedError](pricechangecannotbeissuedwhenalreadycommunicatederror.md).

<a id="Server-update-November-13-2025"></a>

## Server update - November 13, 2025

- Added support for the [Mini Apps Partner Program](https://developer.apple.com/programs/mini-apps-partner/).

<a id="Server-update-July-2-2025"></a>

## Server update — July 2, 2025

- Added tax codes for games in [Choosing tax codes for your SKUs](taxcodes.md).

<a id="Server-update-May-5-2025"></a>

## Server update – May 5, 2025

- Added the error code [TransactionCannotBeRefundedContactSupportError](transactioncannotberefundedcontactsupporterror.md).
- Removed the unused error code `TransactionNotFoundError`.

<a id="11-March-24-2025"></a>

## 1.1 — March 24, 2025

- Added the endpoints [Change Subscription Metadata](change-subscription-metadata.md), [Migrate a Subscription to Advanced Commerce API](migrate-subscription-to-advanced-commerce-api.md), [Request Transaction Refund](request-transaction-refund.md), and [Revoke Subscription](revoke-subscription.md), and the related data types and error codes.

<a id="10-January-23-2025"></a>

## 1.0 — January 23, 2025

- Initial release.

## See Also

### Essentials

- [Setting up your project for Advanced Commerce API](setting-up-your-project-for-advanced-commerce.md): Configure your app in App Store Connect, set up your server, and prepare your SKUs.
- [Setting up a link to manage subscriptions](setupmanagesubscriptions.md): Create a deep link to a subscription-management page for your app.
