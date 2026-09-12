> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:beginauthfor:constraint:)](https://developer.apple.com/documentation/cryptotokenkit/tktokensessiondelegate/tokensession(_:beginauthfor:constraint:))

# tokenSession(\_:beginAuthFor:constraint:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that authentication has begun for the specified operation and constraint.

## Declaration

```swift
optional func tokenSession(_ session: TKTokenSession, beginAuthFor operation: TKTokenOperation, constraint: Any) throws -> TKTokenAuthOperation
```

## Parameters

- `session`: The token session.
- `operation`: The kind of operation.
- `constraint`: The constraint to be satisfied.

<a id="return-value"></a>

## Return Value

The resulting context of the operation, or `nil` if an error occurred.

<a id="discussion"></a>

## Discussion

If you return an instance of a subclass of [TKTokenAuthOperation](../tktokenauthoperation.md) that is provided by the CryptoTokenKit framework, the system will first fill in the context-specific properties, such as the password, before calling the `finishWithError:` method on the context.

## See Also

### Authenticating

- [TKTokenOperationConstraint](../tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](../tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](../tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](../tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

# tokenSession:beginAuthForOperation:constraint:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that authentication has begun for the specified operation and constraint.

## Declaration

```objectivec
- (TKTokenAuthOperation *) tokenSession:(TKTokenSession *) session beginAuthForOperation:(TKTokenOperation) operation constraint:(TKTokenOperationConstraint) constraint error:(NSError **) error;
```

## Parameters

- `session`: The token session.
- `operation`: The kind of operation.
- `constraint`: The constraint to be satisfied.
- `error`: If an error occurred, this method should return `nil` and populate this parameter with an object containing details of the error. The error object should have a `domain` equal to [TKErrorDomain](../tkerrordomain.md) and a `code` equal to a value defined by the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="return-value"></a>

## Return Value

The resulting context of the operation, or `nil` if an error occurred.

<a id="discussion"></a>

## Discussion

If you return an instance of a subclass of [TKTokenAuthOperation](../tktokenauthoperation.md) that is provided by the CryptoTokenKit framework, the system will first fill in the context-specific properties, such as the password, before calling the `finishWithError:` method on the context.

## See Also

### Authenticating

- [TKTokenOperationConstraint](../tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](../tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](../tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](../tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.
