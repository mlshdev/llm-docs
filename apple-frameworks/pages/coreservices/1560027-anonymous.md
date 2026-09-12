> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560027-anonymous](https://developer.apple.com/documentation/coreservices/1560027-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [kMPBlueBlockingErr](1560027-anonymous/kmpblueblockingerr.md)
- [kMPDeletedErr](1560027-anonymous/kmpdeletederr.md): The desired notification the function was waiting upon was deleted.
- [kMPInsufficientResourcesErr](1560027-anonymous/kmpinsufficientresourceserr.md): Could not complete task due to unavailable Multiprocessing Services resources. Note that many functions return this value as a general error when the desired action could not be performed.
- [kMPInvalidIDErr](1560027-anonymous/kmpinvalididerr.md): Invalid ID value. For example, an invalid message queue ID was passed to `MPNotifyQueue`.
- [kMPIterationEndErr](1560027-anonymous/kmpiterationenderr.md)
- [kMPPrivilegedErr](1560027-anonymous/kmpprivilegederr.md)
- [kMPProcessCreatedErr](1560027-anonymous/kmpprocesscreatederr.md)
- [kMPProcessTerminatedErr](1560027-anonymous/kmpprocessterminatederr.md)
- [kMPTaskAbortedErr](1560027-anonymous/kmptaskabortederr.md)
- [kMPTaskBlockedErr](1560027-anonymous/kmptaskblockederr.md): The desired task is blocked.
- [kMPTaskCreatedErr](1560027-anonymous/kmptaskcreatederr.md)
- [kMPTaskStoppedErr](1560027-anonymous/kmptaskstoppederr.md): The desired task is stopped.
- [kMPTimeoutErr](1560027-anonymous/kmptimeouterr.md): The designated timeout interval passed before the function could take action.
