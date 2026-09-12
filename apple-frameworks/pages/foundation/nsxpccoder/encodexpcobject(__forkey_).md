> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpccoder/encodexpcobject(_:forkey:)](https://developer.apple.com/documentation/foundation/nsxpccoder/encodexpcobject(_:forkey:))

# encodeXPCObject(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes an object to send over an XPC connection.

## Declaration

```swift
func encodeXPCObject(_ xpcObject: xpc_object_t, forKey key: String)
```

## Parameters

- `xpcObject`: An object that XPC can encode.
- `key`: A string that your app uses to reference the encoded object.

## See Also

### Encoding and Decoding

- [decodeXPCObject(ofType:forKey:)](decodexpcobject%28oftype_forkey_%29.md): Decodes an object and validates that its type matches the type a service provides over XPC.

# encodeXPCObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes an object to send over an XPC connection.

## Declaration

```objectivec
- (void) encodeXPCObject:(xpc_object_t) xpcObject forKey:(NSString *) key;
```

## Parameters

- `xpcObject`: An object that XPC can encode.
- `key`: A string that your app uses to reference the encoded object.

## See Also

### Encoding and Decoding

- [decodeXPCObjectOfType:forKey:](decodexpcobject%28oftype_forkey_%29.md): Decodes an object and validates that its type matches the type a service provides over XPC.
