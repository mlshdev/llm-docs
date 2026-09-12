> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/providerwithsource:clientqueue:](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/providerwithsource:clientqueue:)

# providerWithSource:clientQueue:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new extension provider with the specified source and dispatch queue.

## Declaration

```objectivec
+ (instancetype) providerWithSource:(id<CMIOExtensionProviderSource>) source clientQueue:(dispatch_queue_t) clientQueue;
```

## Parameters

- `source`: An extension-specific object that conforms to the [CMIOExtensionProviderSource](../cmioextensionprovidersource.md) protocol.
- `clientQueue`: A client dispatch queue, or `nil` to use the default queue.

<a id="return-value"></a>

## Return Value

A new extension provider.

## See Also

### Creating a Provider

- [initWithSource:clientQueue:](init%28source_clientqueue_%29.md): Creates an extension provider with the specified source and dispatch queue.
