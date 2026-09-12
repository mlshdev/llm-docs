> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendelegate/createsession(_:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendelegate/createsession(_:))

# createSession(\_:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to create a session for the specified token.

## Declaration

```swift
func createSession(_ token: TKToken) throws -> TKTokenSession
```

## Parameters

- `token`: The token.

<a id="return-value"></a>

## Return Value

A new token session, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

All operations for a token are performed within a session representing an authentication context. This delegate method is called whenever new authentication context is needed. For example, a client may want to perform a token operation using a keychain object that has an associated `LAContext`.

## See Also

### Delegate Methods

- [token(\_:terminateSession:)](token%28__terminatesession_%29.md): Tells the delegate to terminate the specified token session.

# token:createSessionWithError: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to create a session for the specified token.

## Declaration

```objectivec
- (TKTokenSession *) token:(TKToken *) token createSessionWithError:(NSError **) error;
```

## Parameters

- `token`: The token.
- `error`: If an error occurred, this method should return `nil` and populate this parameter with an object containing details of the error. The error object should have a `domain` equal to [TKErrorDomain](../tkerrordomain.md) and a `code` equal to a value defined by the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="return-value"></a>

## Return Value

A new token session, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

All operations for a token are performed within a session representing an authentication context. This delegate method is called whenever new authentication context is needed. For example, a client may want to perform a token operation using a keychain object that has an associated `LAContext`.

## See Also

### Delegate Methods

- [token:terminateSession:](token%28__terminatesession_%29.md): Tells the delegate to terminate the specified token session.
