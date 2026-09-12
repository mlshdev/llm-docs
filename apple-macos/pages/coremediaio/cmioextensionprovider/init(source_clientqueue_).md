> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/init(source:clientqueue:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/init(source:clientqueue:))

# init(source:clientQueue:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates an extension provider with the specified source and dispatch queue.

## Declaration

```swift
init(source: any CMIOExtensionProviderSource, clientQueue: dispatch_queue_t?)
```

## Parameters

- `source`: An extension-specific object that conforms to the [CMIOExtensionProviderSource](../cmioextensionprovidersource.md) protocol.
- `clientQueue`: A client dispatch queue, or `nil` to use the default queue.

# initWithSource:clientQueue: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates an extension provider with the specified source and dispatch queue.

## Declaration

```objectivec
- (instancetype) initWithSource:(id<CMIOExtensionProviderSource>) source clientQueue:(dispatch_queue_t) clientQueue;
```

## Parameters

- `source`: An extension-specific object that conforms to the [CMIOExtensionProviderSource](../cmioextensionprovidersource.md) protocol.
- `clientQueue`: A client dispatch queue, or `nil` to use the default queue.

## See Also

### Creating a Provider

- [providerWithSource:clientQueue:](providerwithsource_clientqueue_.md): Returns a new extension provider with the specified source and dispatch queue.
