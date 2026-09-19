> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionclient/pid

# pid (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The process identifier of the client.

## Declaration

```swift
var pid: pid_t { get }
```

## See Also

### Identifying a Client

- [clientID](clientid.md): A unique client identifier.

# pid (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The process identifier of the client.

## Declaration

```objectivec
@property (atomic, readonly) pid_t pid;
```

## See Also

### Identifying a Client

- [clientID](clientid.md): A unique client identifier.
