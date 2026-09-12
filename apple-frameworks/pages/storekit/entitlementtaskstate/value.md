> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/entitlementtaskstate/value](https://developer.apple.com/documentation/storekit/entitlementtaskstate/value)

# value

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The entitlement value if the task is successful.

## Declaration

```swift
var value: Value? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` while the value is loading, or if it fails to load for any reason.

Use [value](value.md) as a convenience to access the entitlement value in code that doesn’t depend on the reason the value can’t be accessed if it fails to load.

## See Also

### Getting the transaction with the entitlement

- [transaction](transaction.md): Conforms when `Value` is `VerificationResult<Transaction>?`. The transaction value if the task is successful.
