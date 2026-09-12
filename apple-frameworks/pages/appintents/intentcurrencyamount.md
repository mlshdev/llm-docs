> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentcurrencyamount](https://developer.apple.com/documentation/appintents/intentcurrencyamount)

# IntentCurrencyAmount

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An amount of money to transfer during a financial transaction.

## Declaration

```swift
struct IntentCurrencyAmount
```

## Mentioned In

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)
- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

## Topics

### Creating a currency type

- [init(amount:currencyCode:)](intentcurrencyamount/init%28amount_currencycode_%29.md): Creates a IntentCurrencyAmount from a monetary amount and a currency code.

### Getting the currency details

- [amount](intentcurrencyamount/amount.md): The monetary amount.
- [currencyCode](intentcurrencyamount/currencycode.md): The ISO 4217 currency code that applies to the monetary amount.

### Type Aliases

- [IntentCurrencyAmount.Specification](intentcurrencyamount/specification.md)
- [IntentCurrencyAmount.UnwrappedType](intentcurrencyamount/unwrappedtype.md)
- [IntentCurrencyAmount.ValueType](intentcurrencyamount/valuetype.md)

### Type Properties

- [defaultResolverSpecification](intentcurrencyamount/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Monetary types

- [IntentPaymentMethod](intentpaymentmethod.md): Information about a form of payment supported by your app.
