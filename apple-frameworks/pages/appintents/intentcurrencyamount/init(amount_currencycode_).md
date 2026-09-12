> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentcurrencyamount/init(amount:currencycode:)](https://developer.apple.com/documentation/appintents/intentcurrencyamount/init(amount:currencycode:))

# init(amount:currencyCode:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a IntentCurrencyAmount from a monetary amount and a currency code.

## Declaration

```swift
init(amount: Decimal, currencyCode: String)
```

## Parameters

- `amount`: Monetary amount
- `currencyCode`: ISO 4217 currency code that applies to the monetary amount.
