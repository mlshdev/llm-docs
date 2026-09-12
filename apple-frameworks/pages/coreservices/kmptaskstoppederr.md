> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmptaskstoppederr](https://developer.apple.com/documentation/coreservices/kmptaskstoppederr)

# kMPTaskStoppedErr

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The desired task is stopped.

## Declaration

```swift
var kMPTaskStoppedErr: Int { get }
```

## See Also

### Result Codes

- [kMPIterationEndErr](kmpiterationenderr.md)
- [kMPPrivilegedErr](kmpprivilegederr.md)
- [kMPProcessCreatedErr](kmpprocesscreatederr.md)
- [kMPProcessTerminatedErr](kmpprocessterminatederr.md)
- [kMPTaskCreatedErr](kmptaskcreatederr.md)
- [kMPTaskBlockedErr](kmptaskblockederr.md): The desired task is blocked.
- [kMPDeletedErr](kmpdeletederr.md): The desired notification the function was waiting upon was deleted.
- [kMPTimeoutErr](kmptimeouterr.md): The designated timeout interval passed before the function could take action.
- [kMPInsufficientResourcesErr](kmpinsufficientresourceserr.md): Could not complete task due to unavailable Multiprocessing Services resources. Note that many functions return this value as a general error when the desired action could not be performed.
- [kMPInvalidIDErr](kmpinvalididerr.md): Invalid ID value. For example, an invalid message queue ID was passed to `MPNotifyQueue`.
