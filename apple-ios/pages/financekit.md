> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit](https://developer.apple.com/documentation/financekit)

# FinanceKit

**Framework:** FinanceKit  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Access financial data and interact with Apple Card, Apple Cash, and orders in Wallet.

<a id="Overview"></a>

## Overview

Use FinanceKit to access on-device financial data, Apple Cash, and interact with orders in Apple Wallet.

You interact with FinanceKit through [FinanceStore](financekit/financestore.md) and [FinanceKitUI](financekitui.md), which presents a standardized UI that people access.

![Image of FinanceKit hero logo.](https://developer.apple.com/images/com.apple.financekit/financekit-hero-img.png)

Using the FinanceKit framework, you can:

- Access on-device financial data.
- Add, update, store, and interact with orders in Wallet.
- Interact with Apple Card and Apple Cash.

> **Important**

> To access someone’s financial data, you must meet the criteria outlined in [Get started with FinanceKit](https://developer.apple.com/financekit/), request the [FinanceKit managed entitlement](https://developer.apple.com/contact/request/financekit/), hold an organization-level Apple Developer account, be logged in as Account Holder, and include the `NSFinancialDataUsageDescription` string in your `Info.plist`. Apple reviews each application using [defined criteria](https://developer.apple.com/financekit/). If your request meets the criteria, Apple adds the entitlement to your developer account by using managed capabilities. To request access, see the [FinanceKit managed entitlement request form](https://developer.apple.com/contact/request/financekit/). For more information about managed entitlements, see [Provisioning with capabilities](https://developer.apple.com/help/account/reference/provisioning-with-managed-capabilities).

## Topics

### Essentials

- [Implementing a background delivery extension](financekit/implementing-a-background-delivery-extension.md): Receive up-to-date financial data in your app and its extensions by adding a background delivery extension.
- [FinanceKit updates](https://developer.apple.com/documentation/updates/financekit): Learn more about changes to FinanceKit.

### Data storage

- [FinanceStore](financekit/financestore.md): Secure storage for Apple Wallet orders.

### Authorization

- [authorizationStatus()](financekit/financestore/authorizationstatus%28%29.md): Checks the authorization status for the calling application.
- [requestAuthorization()](financekit/financestore/requestauthorization%28%29.md): Prompts a person to give FinanceKit authorization to access financial data.
- [AuthorizationStatus](financekit/authorizationstatus.md)

### Accounts

- [accounts(query:)](financekit/financestore/accounts%28query_%29.md): Returns a list of accounts a person added to their Wallet that meet the criteria in the provided account query.
- [accountHistory(since:isMonitoring:)](financekit/financestore/accounthistory%28since_ismonitoring_%29.md): Returns a list of accounts a person added since a time specified by the provided financial history token.
- [AssetAccount](financekit/assetaccount.md): A structure that describes the characteristics of an asset account.
- [LiabilityAccount](financekit/liabilityaccount.md): A structure that describes the characteristics of a liability account.
- [Account](financekit/account.md): A structure that describes a financial account.

### Balances

- [accountBalances(query:)](financekit/financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financekit/financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalance](financekit/accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [AccountBalanceQuery](financekit/accountbalancequery.md): A structure that defines an account balance query.
- [Balance](financekit/balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](financekit/creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](financekit/currentbalance.md): Values that describe the state of an account’s credit balance.

### Orders

- [FullyQualifiedOrderIdentifier](financekit/fullyqualifiedorderidentifier.md): A structure that specifies the characteristics of an order.
- [saveOrder(signedArchive:)](financekit/financestore/saveorder%28signedarchive_%29.md): Adds an order to the store or updates an existing order.

### Transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financekit/financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financekit/financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.
- [AccountQuery](financekit/accountquery.md): A structure that defines an account query.
- [AccountCreditInformation](financekit/accountcreditinformation.md): A structure that describes the credit information associated with an account.
- [CurrencyAmount](financekit/currencyamount.md): A structure that describes a monetary amount and its currency.
- [Transaction](financekit/transaction.md): A structure that represents a transaction relating to a specific financial account.
- [TransactionQuery](financekit/transactionquery.md): A structure that describes the parameters to use for a transaction query.
- [TransactionType](financekit/transactiontype.md): Values that describe kinds of transactions.
- [TransactionStatus](financekit/transactionstatus.md): Values that describe the status of a transaction.

### Queries

- [FinanceStore.HistoryToken](financekit/financestore/historytoken.md): A structure that describes the starting point to use for financial data queries.

### Merchant categories

- [MerchantCategoryCode](financekit/merchantcategorycode.md)

### Errors

- [FinanceError](financekit/financeerror.md): Values that describe errors that may occur when accessing financial data.

### Protocols

- [BackgroundDeliveryExtension](financekit/backgrounddeliveryextension.md): An extension used to receive updates about changes to data within the finance store.
- [BackgroundDeliveryExtensionProviding](financekit/backgrounddeliveryextensionproviding.md)
