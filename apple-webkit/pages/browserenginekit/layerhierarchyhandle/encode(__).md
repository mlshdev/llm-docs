> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhandle/encode(_:)](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhandle/encode(_:))

# encode(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Serializes the hierarchy handle into a Mach port reference and accompanying data.

## Declaration

```swift
func encode(_ block: (mach_port_t, Data) -> Void)
```

## Parameters

- `block`: A closure that receives a Mach port and serialized data as arguments.

<a id="discussion"></a>

## Discussion

This method invokes the supplied closure with a `mach_port_t` and `Data` object that together represent the serialized layer hierarchy handle. The port serves as a reference to the layer hierarchy that you can share with another process. Use the port and data together to reconstruct the handle using [init(port:data:)](init%28port_data_%29.md).

```swift
handle.encode { port, data in
    guard port != MACH_PORT_NULL else {
        // The handle is already invalidated.
        return
    }
    
    // Send the port and data to the rendering process.
    sendToRenderingExtension(port: port, data: data)
    
    // Dispose of the port after sending.
    mach_port_deallocate(mach_task_self(), port)
}
```

> **Important**

> Dispose of the Mach port in the supplied closure after sending it to the other process. The port is `MACH_PORT_NULL` if the handle has already been invalidated (see [invalidate()](../layerhierarchy/invalidate%28%29.md)).

Each call to this method creates a new port reference and unique serialized data. Decode each port and data pair only once using [init(port:data:)](init%28port_data_%29.md).

## See Also

### Sharing a layer hierarchy handle using Mach

- [init(port:data:)](init%28port_data_%29.md): Creates a layer hierarchy handle using a Mach port reference and serialized data.

# encodeWithBlock: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Serializes the hierarchy handle into a Mach port reference and accompanying data.

## Declaration

```objectivec
- (void) encodeWithBlock:(void (^)(mach_port_t copiedPort, NSData *data)) block;
```

## Parameters

- `block`: A closure that receives a Mach port and serialized data as arguments.

<a id="discussion"></a>

## Discussion

This method invokes the supplied closure with a `mach_port_t` and `Data` object that together represent the serialized layer hierarchy handle. The port serves as a reference to the layer hierarchy that you can share with another process. Use the port and data together to reconstruct the handle using [handleWithPort:data:error:](init%28port_data_%29.md).

```swift
handle.encode { port, data in
    guard port != MACH_PORT_NULL else {
        // The handle is already invalidated.
        return
    }
    
    // Send the port and data to the rendering process.
    sendToRenderingExtension(port: port, data: data)
    
    // Dispose of the port after sending.
    mach_port_deallocate(mach_task_self(), port)
}
```

> **Important**

> Dispose of the Mach port in the supplied closure after sending it to the other process. The port is `MACH_PORT_NULL` if the handle has already been invalidated (see [invalidate](../layerhierarchy/invalidate%28%29.md)).

Each call to this method creates a new port reference and unique serialized data. Decode each port and data pair only once using [handleWithPort:data:error:](init%28port_data_%29.md).

## See Also

### Sharing a layer hierarchy handle using Mach

- [handleWithPort:data:error:](init%28port_data_%29.md): Creates a layer hierarchy handle using a Mach port reference and serialized data.
