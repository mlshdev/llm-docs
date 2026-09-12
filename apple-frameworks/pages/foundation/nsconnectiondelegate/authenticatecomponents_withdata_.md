> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate/authenticatecomponents:withdata:](https://developer.apple.com/documentation/foundation/nsconnectiondelegate/authenticatecomponents:withdata:)

# authenticateComponents:withData:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a Boolean value that indicates whether given authentication data is valid for a given set of components.

## Declaration

```objectivec
- (BOOL) authenticateComponents:(NSArray *) components withData:(NSData *) signature;
```

## Parameters

- `components`: An array that contains `NSData` and `NSPort` objects belonging to an `NSPortMessage` object. See the [NSPortMessage](../portmessage.md) class specification for more information.
- `signature`: Authentication data created by the delegate of the peer `NSConnection` object with [authenticationDataForComponents:](authenticationdataforcomponents_.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `signature` provided is valid for `components`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use this message for validation of incoming messages. An `NSConnection` object raises an `NSFailedAuthenticationException` on receipt of a remote message the delegate doesn’t authenticate.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Authenticating

- [authenticationDataForComponents:](authenticationdataforcomponents_.md): Deprecated. Returns an `NSData` object to be used as an authentication stamp for an outgoing message.
