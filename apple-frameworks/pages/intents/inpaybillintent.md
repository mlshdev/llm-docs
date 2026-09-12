> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent](https://developer.apple.com/documentation/intents/inpaybillintent)

# INPayBillIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to transfer money to facilitate payment of a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INPayBillIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INPayBillIntent](inpaybillintent.md) object when the user asks to pay a bill for a designated payee. A pay bill intent object includes the payment amount, the payment date, and the recipient of the payment. Use that information to validate the transaction and to schedule the payment.

To handle this intent, the handler object in your Intents extension must adopt the [INPayBillIntentHandling](inpaybillintenthandling.md) protocol. Your handler should confirm the request and create an [INPayBillIntentResponse](inpaybillintentresponse.md) object with the results of scheduling the bill payment.

This intent object represents a financial transaction between the user and an entity (such as a utility company or credit card bill) defined in your app. You’re responsible for configuring and managing the entities that accept the payment of bills.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts app. |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to initiate the payment of a bill in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Pay my water bill | Pay my gas bill on November 21st |
| zh_CN | 付我的水费账单 | 在十一月二十一日付我的煤气账单 |
| zh_HK | 幫我俾保險賬單 | 喺十月九號俾水費賬單 |
| zh_TW | 我想要支付水費帳單 | 付水費帳單於2月21日 |
| yue_CN | 帮我俾保险账单 | 喺十月九号俾水费账单 |
| ar | ادفع فاتورة الكهرباء | ادفع فاتورة الغاز في 21 نوفمبر |
| da | Betal min vandregning | Betal min gasregning på den 21 november |
| de | Zahle meine Wasser Rechnung | Zahle meine Gas Rechnung am 21. November |
| es | Pagar mi factura del agua | Pagar mi factura del gas el 21 de Noviembre |
| fi | Maksa vesimaksu | Maksa sähkölasku marraskuun 21. päivä |
| fr | Payer ma facture d’eau | Payer ma facture de gaz le 21 novembre |
| he | תשלמי את חשבון המים שלי | תשלמי את חשבון הגז שלי ב-21 לנובמבר |
| it | paga il conto dell’acqua | paga il conto del gas il 21 di Novembre |
| ja | PG&Eの請求書を払って | 11月21日にガスの請求書を払って |
| ko | 수도세 내줘 | 가스비 11월 21일에 내줘 |
| ms | Bayar bil air saya | Bayar bil gas saya pada 21 November |
| nb | Betal vannregningen min | Betal strømregningen 21. November |
| nl | Betaal mijn water factuur | Betaal mijn gasrekening op 21 November |
| pt | Pagar minha conta de água | Pagar minha conta de luz dia 21 de novembro |
| ru | Оплати мой счёт за воду | Заплатить за газ 21-го ноября |
| sv | Betala min elräkning | Betala min gasräkning på 21 november |
| th | จ่ายบิลค่าน้ำ | วันที่ 21 พฤศจิกายน จ่ายค่าน้ำ |
| tr | Su faturasını öde Elektrik faturasını öde | 21 Kasım tarihinde doğalgaz faturasını öde |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension initiates the transaction. If your app uses custom names for contacts, you can tell Siri about those names using the [INVocabulary](invocabulary.md) class.

## Topics

### Initializing the Intent Object

- [init(billPayee:from:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate:)](inpaybillintent/init%28billpayee_from_transactionamount_transactionscheduleddate_transactionnote_billtype_duedate_%29.md): Deprecated. Initializes the bill pay intent object with the specified payee and transaction details.

### Getting the Bill Information

- [billPayee](inpaybillintent/billpayee.md): Deprecated. The recipient of the payment.
- [billType](inpaybillintent/billtype.md): Deprecated. The type of the bill.
- [dueDate](inpaybillintent/duedate.md): Deprecated. The due date of the payment.

### Getting the Transaction Details

- [fromAccount](inpaybillintent/fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](inpaybillintent/transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](inpaybillintent/transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](inpaybillintent/transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.

### Initializers

- [init(billPayee:fromAccount:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate:)](inpaybillintent/init%28billpayee_fromaccount_transactionamount_transactionscheduleddate_transactionnote_billtype_duedate_%29.md): Deprecated.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Bill Payment

- [INPayBillIntentHandling](inpaybillintenthandling.md): Deprecated. The handler interface for paying a bill using money from the user’s account.
- [INPayBillIntentResponse](inpaybillintentresponse.md): Deprecated. Your app’s response to a request to pay a bill.

# INPayBillIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request to transfer money to facilitate payment of a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INPayBillIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INPayBillIntent](inpaybillintent.md) object when the user asks to pay a bill for a designated payee. A pay bill intent object includes the payment amount, the payment date, and the recipient of the payment. Use that information to validate the transaction and to schedule the payment.

To handle this intent, the handler object in your Intents extension must adopt the [INPayBillIntentHandling](inpaybillintenthandling.md) protocol. Your handler should confirm the request and create an [INPayBillIntentResponse](inpaybillintentresponse.md) object with the results of scheduling the bill payment.

This intent object represents a financial transaction between the user and an entity (such as a utility company or credit card bill) defined in your app. You’re responsible for configuring and managing the entities that accept the payment of bills.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions, Shortcuts app. |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to initiate the payment of a bill in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Pay my water bill | Pay my gas bill on November 21st |
| zh_CN | 付我的水费账单 | 在十一月二十一日付我的煤气账单 |
| zh_HK | 幫我俾保險賬單 | 喺十月九號俾水費賬單 |
| zh_TW | 我想要支付水費帳單 | 付水費帳單於2月21日 |
| yue_CN | 帮我俾保险账单 | 喺十月九号俾水费账单 |
| ar | ادفع فاتورة الكهرباء | ادفع فاتورة الغاز في 21 نوفمبر |
| da | Betal min vandregning | Betal min gasregning på den 21 november |
| de | Zahle meine Wasser Rechnung | Zahle meine Gas Rechnung am 21. November |
| es | Pagar mi factura del agua | Pagar mi factura del gas el 21 de Noviembre |
| fi | Maksa vesimaksu | Maksa sähkölasku marraskuun 21. päivä |
| fr | Payer ma facture d’eau | Payer ma facture de gaz le 21 novembre |
| he | תשלמי את חשבון המים שלי | תשלמי את חשבון הגז שלי ב-21 לנובמבר |
| it | paga il conto dell’acqua | paga il conto del gas il 21 di Novembre |
| ja | PG&Eの請求書を払って | 11月21日にガスの請求書を払って |
| ko | 수도세 내줘 | 가스비 11월 21일에 내줘 |
| ms | Bayar bil air saya | Bayar bil gas saya pada 21 November |
| nb | Betal vannregningen min | Betal strømregningen 21. November |
| nl | Betaal mijn water factuur | Betaal mijn gasrekening op 21 November |
| pt | Pagar minha conta de água | Pagar minha conta de luz dia 21 de novembro |
| ru | Оплати мой счёт за воду | Заплатить за газ 21-го ноября |
| sv | Betala min elräkning | Betala min gasräkning på 21 november |
| th | จ่ายบิลค่าน้ำ | วันที่ 21 พฤศจิกายน จ่ายค่าน้ำ |
| tr | Su faturasını öde Elektrik faturasını öde | 21 Kasım tarihinde doğalgaz faturasını öde |

In the preceding examples, `<appName>` represents the name of the app whose Intents extension initiates the transaction. If your app uses custom names for contacts, you can tell Siri about those names using the [INVocabulary](invocabulary.md) class.

## Topics

### Initializing the Intent Object

- [initWithBillPayee:fromAccount:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate:](inpaybillintent/init%28billpayee_from_transactionamount_transactionscheduleddate_transactionnote_billtype_duedate_%29.md): Deprecated. Initializes the bill pay intent object with the specified payee and transaction details.

### Getting the Bill Information

- [billPayee](inpaybillintent/billpayee.md): Deprecated. The recipient of the payment.
- [billType](inpaybillintent/billtype.md): Deprecated. The type of the bill.
- [dueDate](inpaybillintent/duedate.md): Deprecated. The due date of the payment.

### Getting the Transaction Details

- [fromAccount](inpaybillintent/fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](inpaybillintent/transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](inpaybillintent/transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](inpaybillintent/transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Bill Payment

- [INPayBillIntentHandling](inpaybillintenthandling.md): Deprecated. The handler interface for paying a bill using money from the user’s account.
- [INPayBillIntentResponse](inpaybillintentresponse.md): Deprecated. Your app’s response to a request to pay a bill.
