> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/findersync/fifindersyncprotocol/makelistenerendpoint(forservicename:itemurl:)

# makeListenerEndpoint(forServiceName:itemURL:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```swift
optional func makeListenerEndpoint(forServiceName serviceName: NSFileProviderServiceName, itemURL: URL) throws -> NSXPCListenerEndpoint
```

# makeListenerEndpointForServiceName:itemURL:andReturnError: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

## Declaration

```objectivec
- (NSXPCListenerEndpoint *) makeListenerEndpointForServiceName:(NSFileProviderServiceName) serviceName itemURL:(NSURL *) itemURL andReturnError:(NSError **) error;
```
