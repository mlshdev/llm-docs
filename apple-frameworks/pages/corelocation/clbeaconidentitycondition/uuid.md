> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clbeaconidentitycondition/uuid

# UUID

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A universally unique identifier that represent the beacon’s identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

## See Also

### Accessing the beacon’s properties

- [major](major.md): The most significant value associated with the beacon.
- [minor](minor.md): The least significant value associated with the beacon.
