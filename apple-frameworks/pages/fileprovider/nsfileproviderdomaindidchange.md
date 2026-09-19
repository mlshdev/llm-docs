> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderdomaindidchange

# NSFileProviderDomainDidChange

**Interface language:** Objective-C

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A notification that posts when a file provider’s domain changes.

## Declaration

```objectivec
extern NSNotificationName const NSFileProviderDomainDidChange;
```

<a id="Discussion"></a>

## Discussion

The system only posts this notification after the first call to [getDomainsWithCompletionHandler:](nsfileprovidermanager/getdomainswithcompletionhandler%28__%29.md). After receiving this notification, call [getDomainsWithCompletionHandler:](nsfileprovidermanager/getdomainswithcompletionhandler%28__%29.md) again to determine what the changes are.

## See Also

### Global variables

- [NSFileProviderMaterializedSetDidChange](nsfileprovidermaterializedsetdidchange.md): A notification that the system posts when the set of materialized items changes for your file provider extension.
- [NSFileProviderPendingSetDidChange](nsfileproviderpendingsetdidchange.md): A notification that the system posts when the set of pending items changes for your file provider extension.
