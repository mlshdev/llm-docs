> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponse/bills](https://developer.apple.com/documentation/intents/insearchforbillsintentresponse/bills)

# bills (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The bills found during the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var bills: [INBillDetails]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the search results. Each [INBillDetails](../inbilldetails.md) object should contain information about a single bill that matches the search criteria. Always provide as much detail as possible in each [INBillDetails](../inbilldetails.md) object.

# bills (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The bills found during the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INBillDetails *> * bills;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INBillDetails *> * bills;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the search results. Each [INBillDetails](../inbilldetails.md) object should contain information about a single bill that matches the search criteria. Always provide as much detail as possible in each [INBillDetails](../inbilldetails.md) object.
