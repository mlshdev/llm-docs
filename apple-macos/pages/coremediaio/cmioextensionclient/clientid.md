> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionclient/clientid

# clientID (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A unique client identifier.

## Declaration

```swift
var clientID: UUID { get }
```

## See Also

### Identifying a Client

- [pid](pid.md): The process identifier of the client.

# clientID (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A unique client identifier.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSUUID * clientID;
```

## See Also

### Identifying a Client

- [pid](pid.md): The process identifier of the client.
