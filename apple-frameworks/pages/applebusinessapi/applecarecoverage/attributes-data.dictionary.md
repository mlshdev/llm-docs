> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/applecarecoverage/attributes-data.dictionary](https://developer.apple.com/documentation/applebusinessapi/applecarecoverage/attributes-data.dictionary)

# AppleCareCoverage.Attributes

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

Attributes for an organization device’s AppleCare coverage resource.

## Declaration

```
object AppleCareCoverage.Attributes
```

## Properties

- `status` — `AppleCareCoverageStatus`: The current status of device coverage. Possible values: ‘ACTIVE’, ‘INACTIVE’
- `paymentType` — `AppleCareCoveragePaymentType`: Payment type of device coverage. Possible values: ‘ABE_SUBSCRIPTION’, ‘PAID_UP_FRONT’, ‘SUBSCRIPTION’, ‘NONE’
- `description` — `string`: Description of device coverage.
- `startDateTime` — `date-time`: UTC date when coverage period commenced. For AppleCare+ for Business, it’s UTC date when a device enrolls into the plan.
- `endDateTime` — `date-time`: UTC date when coverage period ends for the device. This field isn’t applicable for AppleCare+ for Business.
- `isRenewable` — `boolean`: Indicates whether coverage renews after endDateTime for the device. This field isn’t applicable for Limited Warranty.
- `isCanceled` — `boolean`: Indicates whether coverage is canceled for the device. This field isn’t applicable for Limited Warranty and AppleCare+ for Business.
- `contractCancelDateTime` — `date-time`: UTC date when coverage was canceled for the device. This field isn’t applicable for Limited Warranty and AppleCare+ for Business.
- `agreementNumber` — `string`: Agreement number associated with device coverage. This field isn’t applicable for Limited Warranty and AppleCare+ for Business.

<a id="overview"></a>

## Overview

> **Note**

> When additional attributes are added by Apple, they appear automatically, without requiring a newer version of the API.

<a id="Status"></a>

#### Status

| **Possible values** | **Description** |
| --- | --- |
| `ACTIVE` | Coverage is currently active. |
| `INACTIVE` | Coverage is currently inactive. |

<a id="PaymentType"></a>

#### PaymentType

| **Possible values** | **Description** |
| --- | --- |
| `ABE_SUBSCRIPTION` | AppleCare+ for Business. |
| `PAID_UP_FRONT` | Coverage was paid in full at time of purchase. |
| `SUBSCRIPTION` | Coverage has recurring billing. |
| `NONE` | No payment type is associated with coverage (for example, Limited Warranty Coverage). |
