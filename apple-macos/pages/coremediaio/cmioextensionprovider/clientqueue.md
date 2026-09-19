> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/clientqueue

# clientQueue (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The dispatch queue on which the system performs client operations.

## Declaration

```swift
var clientQueue: dispatch_queue_t { get }
```

## See Also

### Inspecting a Provider

- [source](source.md): The source for the provider.

# clientQueue (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The dispatch queue on which the system performs client operations.

## Declaration

```objectivec
@property (atomic, strong, readonly) dispatch_queue_t clientQueue;
```

## See Also

### Inspecting a Provider

- [source](source.md): The source for the provider.
