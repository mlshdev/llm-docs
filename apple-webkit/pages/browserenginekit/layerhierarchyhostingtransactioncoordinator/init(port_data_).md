> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(port:data:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init(port:data:))

# init(port:data:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a transaction coordinator using a Mach port reference and serialized data.

## Declaration

```swift
init(port: mach_port_t, data: Data) throws
```

## Parameters

- `port`: A Mach port (`mach_port_t`) that references the coordinator.
- `data`: The serialized data with which to reconstruct the coordinator.

<a id="discussion"></a>

## Discussion

Use this initializer to reconstruct a transaction coordinator that your app serializes using [encode(\_:)](encode%28__%29.md) in another process.

This method takes ownership of the Mach port send right, even if an error occurs; don’t use or deallocate the port after calling this method.

## See Also

### Sharing a transaction coordinator using Mach

- [encode(\_:)](encode%28__%29.md): Serializes the transaction coordinator into a Mach port reference and accompanying data.

# coordinatorWithPort:data:error: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a transaction coordinator using a Mach port reference and serialized data.

## Declaration

```objectivec
+ (BELayerHierarchyHostingTransactionCoordinator *) coordinatorWithPort:(mach_port_t) port data:(NSData *) data error:(NSError **) error;
```

## Parameters

- `port`: A Mach port (`mach_port_t`) that references the coordinator.
- `data`: The serialized data with which to reconstruct the coordinator.
- `error`: A reference to an error object, if an error occurs. The method sets this reference to `nil` if no error occurs. Pass `nil` to ignore the error.

<a id="discussion"></a>

## Discussion

Use this initializer to reconstruct a transaction coordinator that your app serializes using [encodeWithBlock:](encode%28__%29.md) in another process.

This method takes ownership of the Mach port send right, even if an error occurs; don’t use or deallocate the port after calling this method.

## See Also

### Sharing a transaction coordinator using Mach

- [encodeWithBlock:](encode%28__%29.md): Serializes the transaction coordinator into a Mach port reference and accompanying data.
