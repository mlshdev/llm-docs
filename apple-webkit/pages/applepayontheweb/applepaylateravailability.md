> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaylateravailability](https://developer.apple.com/documentation/applepayontheweb/applepaylateravailability)

# ApplePayLaterAvailability

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Enumeration  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Values you use to enable or disable Apple Pay Later for a specific transaction.

> Apple Pay Later is deprecated.

## Declaration

```
enum ApplePayLaterAvailability
```

<a id="overview"></a>

## Overview

The following table describes the Apple Pay Later availability reasons.

| Availability reason | Description |
| --- | --- |
| `available` | Apple Pay Later is available. ![](https://developer.apple.com/images/com.apple.applepayontheweb/spacer.png) This is the default. |
| `unavailableItemIneligible` | Apple Pay Later is unavailable because one or more ineligible or prohibited items are in the shopping cart, such as gift cards |
| `unavailableRecurringTransaction` | Apple Pay Later is unavailable because there’s a recurring payment or subscription in the shopping cart. |

Set the `applePayLaterAvailability` property to only one of these reasons as a string, for example:

```javascript
applePayLaterAvailability = “unavailableRecurringTransaction”;
```

## Topics

### Enumeration Cases

- [available](applepaylateravailability/available.md)
- [unavailableItemIneligible](applepaylateravailability/unavailableitemineligible.md)
- [unavailableRecurringTransaction](applepaylateravailability/unavailablerecurringtransaction.md)

## See Also

### Setting the Apple Pay Later mode

- [applePayLaterAvailability](applepayrequestbase/applepaylateravailability.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
