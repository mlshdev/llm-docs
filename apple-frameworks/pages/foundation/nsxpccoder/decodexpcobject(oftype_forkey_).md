> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpccoder/decodexpcobject(oftype:forkey:)](https://developer.apple.com/documentation/foundation/nsxpccoder/decodexpcobject(oftype:forkey:))

# decodeXPCObject(ofType:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes an object and validates that its type matches the type a service provides over XPC.

## Declaration

```swift
func decodeXPCObject(ofType type: xpc_type_t, forKey key: String) -> xpc_object_t?
```

## Parameters

- `type`: An opaque pointer to an encoded XPC object.
- `key`: A string that your app uses to reference the decoded object.

<a id="return-value"></a>

## Return Value

An object that XPC can encode.

<a id="Discussion"></a>

## Discussion

The [decodeXPCObject(ofType:forKey:)](decodexpcobject%28oftype_forkey_%29.md) method validates that the type of the decoded object matches the type of the encoded object. If they don’t match, the [NSXPCCoder](../nsxpccoder.md) throws an exception in support of [NSSecureCoding](../nssecurecoding.md).

Be sure to check the result against [null](../nsnull/null.md) if you call an [XPC](../../xpc.md) function because calling an [XPC](../../xpc.md) function on a [null](../nsnull/null.md) object results in a crash.

## See Also

### Encoding and Decoding

- [encodeXPCObject(\_:forKey:)](encodexpcobject%28__forkey_%29.md): Encodes an object to send over an XPC connection.

# decodeXPCObjectOfType:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes an object and validates that its type matches the type a service provides over XPC.

## Declaration

```objectivec
- (xpc_object_t) decodeXPCObjectOfType:(xpc_type_t) type forKey:(NSString *) key;
```

## Parameters

- `type`: An opaque pointer to an encoded XPC object.
- `key`: A string that your app uses to reference the decoded object.

<a id="return-value"></a>

## Return Value

An object that XPC can encode.

<a id="Discussion"></a>

## Discussion

The [decodeXPCObjectOfType:forKey:](decodexpcobject%28oftype_forkey_%29.md) method validates that the type of the decoded object matches the type of the encoded object. If they don’t match, the [NSXPCCoder](../nsxpccoder.md) throws an exception in support of [NSSecureCoding](../nssecurecoding.md).

Be sure to check the result against [null](../nsnull/null.md) if you call an [XPC](../../xpc.md) function because calling an [XPC](../../xpc.md) function on a [null](../nsnull/null.md) object results in a crash.

## See Also

### Encoding and Decoding

- [encodeXPCObject:forKey:](encodexpcobject%28__forkey_%29.md): Encodes an object to send over an XPC connection.
