> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderdelegate/provider(_:execute:)](https://developer.apple.com/documentation/callkit/cxproviderdelegate/provider(_:execute:))

# provider(\_:execute:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Called when a transaction is executed by a call controller.

## Declaration

```swift
optional func provider(_ provider: CXProvider, execute transaction: CXTransaction) -> Bool
```

## Parameters

- `provider`: The telephony provider.
- `transaction`: Contains the upcoming actions.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `transaction` was handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Most delegates should not need to provide an implementation for this method. However, a delegate can implement this method to customize how transactions are handled. This method returns [true](https://developer.apple.com/documentation/swift/true) to indicate that the custom implementation handled the transaction and returns [false](https://developer.apple.com/documentation/swift/false) to have the provider execute the transaction normally—as if the delegate did not implement this method. For example, given a transaction consisting of a [CXSetHeldCallAction](../cxsetheldcallaction.md) object and a [CXSetGroupCallAction](../cxsetgroupcallaction.md) object, the delegate may override this method to inject a 30 second wait and play hold music to the caller.

# provider:executeTransaction: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Called when a transaction is executed by a call controller.

## Declaration

```objectivec
- (BOOL) provider:(CXProvider *) provider executeTransaction:(CXTransaction *) transaction;
```

## Parameters

- `provider`: The telephony provider.
- `transaction`: Contains the upcoming actions.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `transaction` was handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Most delegates should not need to provide an implementation for this method. However, a delegate can implement this method to customize how transactions are handled. This method returns [true](https://developer.apple.com/documentation/swift/true) to indicate that the custom implementation handled the transaction and returns [false](https://developer.apple.com/documentation/swift/false) to have the provider execute the transaction normally—as if the delegate did not implement this method. For example, given a transaction consisting of a [CXSetHeldCallAction](../cxsetheldcallaction.md) object and a [CXSetGroupCallAction](../cxsetgroupcallaction.md) object, the delegate may override this method to inject a 30 second wait and play hold music to the caller.
