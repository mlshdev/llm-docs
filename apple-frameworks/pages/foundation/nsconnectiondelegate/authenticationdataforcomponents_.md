> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate/authenticationdataforcomponents:](https://developer.apple.com/documentation/foundation/nsconnectiondelegate/authenticationdataforcomponents:)

# authenticationDataForComponents:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an `NSData` object to be used as an authentication stamp for an outgoing message.

## Declaration

```objectivec
- (NSData *) authenticationDataForComponents:(NSArray *) components;
```

## Parameters

- `components`: An array containing the elements of a network message, in the form of `NSPort` and `NSData` objects.

<a id="return-value"></a>

## Return Value

An `NSData` object to be used as an authentication stamp for an outgoing message.

<a id="Discussion"></a>

## Discussion

The delegate should use only the `NSData` elements to create the authentication stamp. See the [NSPortMessage](../portmessage.md) class specification for more information on the components.

If [authenticationDataForComponents:](authenticationdataforcomponents_.md) returns `nil`, an `NSGenericException` will be raised. If the delegate determines that the message shouldn’t be authenticated, it should return an empty `NSData` object. The delegate on the other side of the connection must then be prepared to accept an empty `NSData` object as the second parameter to [authenticateComponents:withData:](authenticatecomponents_withdata_.md) and to handle the situation appropriately.

The `components` parameter will be validated on receipt by the delegate of the peer `NSConnection` object with [authenticateComponents:withData:](authenticatecomponents_withdata_.md).

## See Also

### Authenticating

- [authenticateComponents:withData:](authenticatecomponents_withdata_.md): Deprecated. Returns a Boolean value that indicates whether given authentication data is valid for a given set of components.
