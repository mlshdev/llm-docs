> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/backgrounddeliveryextension](https://developer.apple.com/documentation/financekit/backgrounddeliveryextension)

# BackgroundDeliveryExtension

**Framework:** FinanceKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An extension used to receive updates about changes to data within the finance store.

## Declaration

```swift
protocol BackgroundDeliveryExtension : AppExtension, BackgroundDeliveryExtensionProviding
```

<a id="overview"></a>

## Overview

Use [enableBackgroundDelivery(for:frequency:)](financestore/enablebackgrounddelivery%28for_frequency_%29.md) to enable updates for an extension and see [BackgroundDeliveryExtensionProviding](backgrounddeliveryextensionproviding.md) to implement functions for an extension.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [BackgroundDeliveryExtensionProviding](backgrounddeliveryextensionproviding.md)
