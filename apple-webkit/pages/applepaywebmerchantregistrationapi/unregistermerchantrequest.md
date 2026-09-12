> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaywebmerchantregistrationapi/unregistermerchantrequest](https://developer.apple.com/documentation/applepaywebmerchantregistrationapi/unregistermerchantrequest)

# UnregisterMerchantRequest

**Interface language:** Data

**Framework:** Apple Pay Web Merchant Registration API  
**Kind:** Object  
**Availability:** Apple Pay Web Merchant Registration API 1.0+

The request body you use to unregister one or more merchant domains.

## Declaration

```
object UnregisterMerchantRequest
```

## Properties

- `domainNames` — `[string]` (required): A list of fully qualified domain names to unregister. If a merchant has no remaining domain names after this request removes domains, Apple Pay server deletes the merchant’s registration.
- `partnerInternalMerchantIdentifier` — `string` (required): A merchant identifier that you create to uniquely identify the registered merchant, and which you use in Apple Pay transactions and in this API.
  **Maximum length:** `1024`  
  **Allowed values:** `/a-zA-Z0-9~-_+&@$!|,.;/`
- `reason` — `string` (required): A short, human-readable phrase that describes the cause of unregistration.
  **Maximum length:** `1024`

<a id="overview"></a>

## Overview

The following example shows the format of an `UnregisterMerchant` request.

```json
{
    "domainNames" : [
        "subdomain-1.example.com"
    ],
    "partnerInternalMerchantIdentifier": "ABC-123456",
    "reason": "merchant has closed their account"
}
```

## See Also

### Web Merchant Unregistration

- [Unregister Merchant](unregister-merchant.md): Unregister one or more domains associated with a previously registered merchant.
