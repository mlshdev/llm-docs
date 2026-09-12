> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhandle/init(port:data:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhandle/init(port:data:))

# init(port:data:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a layer hierarchy handle using a Mach port reference and serialized data.

## Declaration

```swift
init(port: mach_port_t, data: Data) throws
```

## Parameters

- `port`: A Mach port (`mach_port_t`) that references the layer hierarchy.
- `data`: The serialized data with which to reconstruct the handle.

<a id="discussion"></a>

## Discussion

Use this initializer to reconstruct a layer hierarchy handle that your app serializes using [encode(\_:)](encode%28__%29.md) in another process.

This method takes ownership of the Mach port send right, even if an error occurs; don’t use or deallocate the port after calling this method.

## See Also

### Sharing a layer hierarchy handle using Mach

- [encode(\_:)](encode%28__%29.md): Serializes the hierarchy handle into a Mach port reference and accompanying data.

# handleWithPort:data:error: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a layer hierarchy handle using a Mach port reference and serialized data.

## Declaration

```objectivec
+ (BELayerHierarchyHandle *) handleWithPort:(mach_port_t) port data:(NSData *) data error:(NSError **) error;
```

## Parameters

- `port`: A Mach port (`mach_port_t`) that references the layer hierarchy.
- `data`: The serialized data with which to reconstruct the handle.
- `error`: A reference to an error object, if an error occurs. The method sets this reference to `nil` if no error occurs. Pass `nil` to ignore the error.

<a id="discussion"></a>

## Discussion

Use this initializer to reconstruct a layer hierarchy handle that your app serializes using [encodeWithBlock:](encode%28__%29.md) in another process.

This method takes ownership of the Mach port send right, even if an error occurs; don’t use or deallocate the port after calling this method.

## See Also

### Sharing a layer hierarchy handle using Mach

- [encodeWithBlock:](encode%28__%29.md): Serializes the hierarchy handle into a Mach port reference and accompanying data.
