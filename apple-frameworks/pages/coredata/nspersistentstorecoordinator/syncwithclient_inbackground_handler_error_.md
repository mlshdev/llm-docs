> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/syncwithclient:inbackground:handler:error:

# syncWithClient:inBackground:handler:error:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.7)

## Declaration

```objectivec
- (BOOL) syncWithClient:(ISyncClient *) client inBackground:(BOOL) flag handler:(id<NSPersistentStoreCoordinatorSyncing>) syncHandler error:(NSError **) rError;
```
