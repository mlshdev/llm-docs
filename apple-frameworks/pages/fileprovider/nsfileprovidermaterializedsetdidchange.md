> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermaterializedsetdidchange](https://developer.apple.com/documentation/fileprovider/nsfileprovidermaterializedsetdidchange)

# NSFileProviderMaterializedSetDidChange

**Interface language:** Objective-C

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

A notification that the system posts when the set of materialized items changes for your file provider extension.

## Declaration

```objectivec
extern NSNotificationName const NSFileProviderMaterializedSetDidChange;
```

## Mentioned In

- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

## See Also

### Global variables

- [NSFileProviderDomainDidChange](nsfileproviderdomaindidchange.md): A notification that posts when a file provider’s domain changes.
- [NSFileProviderPendingSetDidChange](nsfileproviderpendingsetdidchange.md): A notification that the system posts when the set of pending items changes for your file provider extension.
