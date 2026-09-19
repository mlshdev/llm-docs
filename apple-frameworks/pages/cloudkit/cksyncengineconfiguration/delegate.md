> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengineconfiguration/delegate

# delegate

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The object that provides the records to sync and handles any related events.

## Declaration

```objectivec
@property (weak) id<CKSyncEngineDelegate> delegate;
```

## See Also

### Handling record changes

- [CKSyncEngineDelegate](../cksyncenginedelegate-3c38p.md): An interface for providing record data to a sync engine and customizing that engine’s behavior.
