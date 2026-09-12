> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mdquerybatchingparams](https://developer.apple.com/documentation/coreservices/mdquerybatchingparams)

# MDQueryBatchingParams (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Structure containing the progress notification batchingparameters of a MDQuery.

## Declaration

```swift
struct MDQueryBatchingParams
```

<a id="overview"></a>

## Overview

The default batching parameters are undefined and subjectto change.

## Topics

### Initializers

- [init()](mdquerybatchingparams/1447614-init.md)
- [init(first_max_num:first_max_ms:progress_max_num:progress_max_ms:update_max_num:update_max_ms:)](mdquerybatchingparams/1443087-init.md)

### Instance Properties

- [first_max_ms](mdquerybatchingparams/1413073-first_max_ms.md): The maximum number of milliseconds that can passbefore the first progress notification is sent. This value is advisory,in that the notification will be triggered at some point after `first_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the initial result-gathering phase of a query.
- [first_max_num](mdquerybatchingparams/1413089-first_max_num.md): The maximum number of results that can accumulatebefore the first progress notification is sent. This value is usedonly during the initial result-gathering phase of a query.
- [progress_max_ms](mdquerybatchingparams/1413043-progress_max_ms.md): The maximum number of milliseconds that can passbefore additional progress notifications are sent. This value isadvisory, in that the notification will be triggered at some pointafter `progress_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the initial result-gathering phase of a query.
- [progress_max_num](mdquerybatchingparams/1413036-progress_max_num.md): The maximum number of results that can accumulatebefore additional progress notifications are sent. This value isused only during the initial result-gathering phase of a query.
- [update_max_ms](mdquerybatchingparams/1413034-update_max_ms.md): The maximum number of milliseconds that can passbefore an update notification is sent. This value is advisory, inthat the notification will be triggered at some point after `update_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the live-update phase of a query.
- [update_max_num](mdquerybatchingparams/1413068-update_max_num.md): The maximum number of results that can accumulatebefore an update notification is sent. This value is used only duringthe live-update phase of a query.

# MDQueryBatchingParams (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Structure containing the progress notification batchingparameters of a MDQuery.

## Declaration

```objectivec
typedef struct MDQueryBatchingParams {
    ...
} MDQueryBatchingParams;
```

<a id="overview"></a>

## Overview

The default batching parameters are undefined and subjectto change.

## Topics

### Instance Properties

- [first_max_ms](mdquerybatchingparams/1413073-first_max_ms.md): The maximum number of milliseconds that can passbefore the first progress notification is sent. This value is advisory,in that the notification will be triggered at some point after `first_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the initial result-gathering phase of a query.
- [first_max_num](mdquerybatchingparams/1413089-first_max_num.md): The maximum number of results that can accumulatebefore the first progress notification is sent. This value is usedonly during the initial result-gathering phase of a query.
- [progress_max_ms](mdquerybatchingparams/1413043-progress_max_ms.md): The maximum number of milliseconds that can passbefore additional progress notifications are sent. This value isadvisory, in that the notification will be triggered at some pointafter `progress_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the initial result-gathering phase of a query.
- [progress_max_num](mdquerybatchingparams/1413036-progress_max_num.md): The maximum number of results that can accumulatebefore additional progress notifications are sent. This value isused only during the initial result-gathering phase of a query.
- [update_max_ms](mdquerybatchingparams/1413034-update_max_ms.md): The maximum number of milliseconds that can passbefore an update notification is sent. This value is advisory, inthat the notification will be triggered at some point after `update_max_ms` millisecondshave passed since the query began accumulating results. This valueis used only during the live-update phase of a query.
- [update_max_num](mdquerybatchingparams/1413068-update_max_num.md): The maximum number of results that can accumulatebefore an update notification is sent. This value is used only duringthe live-update phase of a query.
