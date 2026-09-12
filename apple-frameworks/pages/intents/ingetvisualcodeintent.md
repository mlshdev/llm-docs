> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetvisualcodeintent](https://developer.apple.com/documentation/intents/ingetvisualcodeintent)

# INGetVisualCodeIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request for a visual code to use for exchanging payment and contact information.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INGetVisualCodeIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INGetVisualCodeIntent](ingetvisualcodeintent.md) object when the user asks for a visual code to use with a scanner. A visual code is a bar code or QR code that embeds information about a transaction. For example, an app might provide a visual code to facilitate payment for services. Apps can also use visual codes to communicate a user’s contact information.

To handle this intent, the handler object in your Intents extension must adopt the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol. Your handler should confirm the request and create an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object with an image containing the visual code. Siri handles the display of the provided visual code in order to scan it.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Suggestions |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to display visual codes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Show my personal QR code | Display my payment code |
| zh_CN | 显示我的个人二维码 | 显示我的支付码 |
| zh_HK | 顯示我嘅二維碼 | 顯示我嘅支付碼 |
| zh_TW | 顯示我的通訊錄二維碼 | 顯示我的支付二維碼 |
| yue_CN | 显示我嘅二维码 | 显示我嘅支付码 |
| ar | أرني رمز QR الخاص بي | اعرض رمز الدفع الخاص بي |
| da | vis min qr kode | vis min betalings kode |
| de | Zeige meinen persönlichen QR-Code | Zeige meinen Zahlungscode |
| es | Muestra mi código QR | Muestra mi código de pago |
| fi | Näytä oma QR-koodini | Näytä maksukoodini |
| fr | Montre-moi mon code QR personnel | Affiche mon code de paiement |
| he | תראי את הקוד QR הפרטי שלי | תראי את הקוד תשלום שלי |
| it | Mostrami il mio codice QR personale | Mostra il mio codice di pagamento |
| ja | 自分のQRコードを表示 | 自分の支払いコードを表示 |
| ko | 나의 개인 QR 코드 보여줘 | 나의 결제 코드 보여줘 |
| ms | Tunjukkan kod QR peribadi saya | Paparkan kod bayaran saya |
| nb | Vis min personlige QR-kode | Vis betalingskoden min |
| nl | Toon mijn persoonlijke QR-code | Geef mijn betalingscode weer |
| pt | Mostre meu código QR pessoal | Mostra meu código QR de pagamento |
| ru | Покажи мой личный QR-код | Отобрази мой код оплаты |
| sv | Visa min QR-kod | Visa min betalkod |
| th | โชว์คิวอาร์โค้ดของฉัน | แสดงโค้ดการจ่ายเงินของฉัน |
| tr | QR kodumu göster | Ödeme kodumu görüntüle |

## Topics

### Initializing the Intent Object

- [init(visualCodeType:)](ingetvisualcodeintent/init%28visualcodetype_%29.md): Deprecated. Initializes the intent object with information about the requested type of code.

### Getting the Visual Code Type

- [visualCodeType](ingetvisualcodeintent/visualcodetype.md): Deprecated. The type of visual code requested by the user.
- [INVisualCodeType](invisualcodetype.md): Deprecated. Constants indicating the purpose of the visual code.

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

### Visual Codes

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md): Deprecated. The handler interface for displaying your app’s visual codes.
- [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md): Deprecated. Your app’s response to a request for a visual code.

# INGetVisualCodeIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request for a visual code to use for exchanging payment and contact information.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INGetVisualCodeIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INGetVisualCodeIntent](ingetvisualcodeintent.md) object when the user asks for a visual code to use with a scanner. A visual code is a bar code or QR code that embeds information about a transaction. For example, an app might provide a visual code to facilitate payment for services. Apps can also use visual codes to communicate a user’s contact information.

To handle this intent, the handler object in your Intents extension must adopt the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol. Your handler should confirm the request and create an [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md) object with an image containing the visual code. Siri handles the display of the provided visual code in order to scan it.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Suggestions |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

<a id="Example-Phrases"></a>

### Example Phrases

Users can ask Siri to display visual codes in a variety of ways. The table below provides a few sample phrases in different languages. You can use these phrases during testing to trigger your intents. This list isn’t exhaustive and Siri may recognize many other phrases.

| Locale | Example 1 | Example 2 |
| --- | --- | --- |
| en | Show my personal QR code | Display my payment code |
| zh_CN | 显示我的个人二维码 | 显示我的支付码 |
| zh_HK | 顯示我嘅二維碼 | 顯示我嘅支付碼 |
| zh_TW | 顯示我的通訊錄二維碼 | 顯示我的支付二維碼 |
| yue_CN | 显示我嘅二维码 | 显示我嘅支付码 |
| ar | أرني رمز QR الخاص بي | اعرض رمز الدفع الخاص بي |
| da | vis min qr kode | vis min betalings kode |
| de | Zeige meinen persönlichen QR-Code | Zeige meinen Zahlungscode |
| es | Muestra mi código QR | Muestra mi código de pago |
| fi | Näytä oma QR-koodini | Näytä maksukoodini |
| fr | Montre-moi mon code QR personnel | Affiche mon code de paiement |
| he | תראי את הקוד QR הפרטי שלי | תראי את הקוד תשלום שלי |
| it | Mostrami il mio codice QR personale | Mostra il mio codice di pagamento |
| ja | 自分のQRコードを表示 | 自分の支払いコードを表示 |
| ko | 나의 개인 QR 코드 보여줘 | 나의 결제 코드 보여줘 |
| ms | Tunjukkan kod QR peribadi saya | Paparkan kod bayaran saya |
| nb | Vis min personlige QR-kode | Vis betalingskoden min |
| nl | Toon mijn persoonlijke QR-code | Geef mijn betalingscode weer |
| pt | Mostre meu código QR pessoal | Mostra meu código QR de pagamento |
| ru | Покажи мой личный QR-код | Отобрази мой код оплаты |
| sv | Visa min QR-kod | Visa min betalkod |
| th | โชว์คิวอาร์โค้ดของฉัน | แสดงโค้ดการจ่ายเงินของฉัน |
| tr | QR kodumu göster | Ödeme kodumu görüntüle |

## Topics

### Initializing the Intent Object

- [initWithVisualCodeType:](ingetvisualcodeintent/init%28visualcodetype_%29.md): Deprecated. Initializes the intent object with information about the requested type of code.

### Getting the Visual Code Type

- [visualCodeType](ingetvisualcodeintent/visualcodetype.md): Deprecated. The type of visual code requested by the user.
- [INVisualCodeType](invisualcodetype.md): Deprecated. Constants indicating the purpose of the visual code.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Visual Codes

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md): Deprecated. The handler interface for displaying your app’s visual codes.
- [INGetVisualCodeIntentResponse](ingetvisualcodeintentresponse.md): Deprecated. Your app’s response to a request for a visual code.
