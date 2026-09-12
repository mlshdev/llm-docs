> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/source](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/source)

# source (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The source for the provider.

## Declaration

```swift
weak var source: (any CMIOExtensionProviderSource)? { get }
```

## See Also

### Inspecting a Provider

- [clientQueue](clientqueue.md): The dispatch queue on which the system performs client operations.

# source (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The source for the provider.

## Declaration

```objectivec
@property (atomic, weak, readonly) id<CMIOExtensionProviderSource> source;
```

## See Also

### Inspecting a Provider

- [clientQueue](clientqueue.md): The dispatch queue on which the system performs client operations.
