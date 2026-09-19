> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/wsprotocolhandlerref

# WSProtocolHandlerRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

An opaque reference to a web services protocol handler.

## Declaration

```objectivec
typedef struct OpaqueWSProtocolHandlerRef *WSProtocolHandlerRef;
```

<a id="discussion"></a>

## Discussion

The `WSProtocolHandlerRef` represents an instance of a protocol handler. Create it using `WSProtocolHandlerCreate`.
