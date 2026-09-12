> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponse/accounts](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponse/accounts)

# accounts (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The accounts found during the search.

## Declaration

```swift
var accounts: [INPaymentAccount]? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the search results. Each INPaymentAccount object should contain information about the account, including the current balance if the user requested that information.

# accounts (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The accounts found during the search.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INPaymentAccount *> * accounts;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INPaymentAccount *> * accounts;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the search results. Each INPaymentAccount object should contain information about the account, including the current balance if the user requested that information.
