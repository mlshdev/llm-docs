> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/paralleltaskcompletion](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/paralleltaskcompletion)

# ParallelTaskCompletion

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Indicates to the system that the extension has completed an asynchronous request.

## Declaration

```objectivec
virtual void ParallelTaskCompletion(OSAction *action, SCSIUserParallelResponse response);
```

## Parameters

- `action`: A pointer to the [OSAction](../../driverkit/osaction.md) object of the asynchronous request that the system specifies in a [UserProcessParallelTask](userprocessparalleltask.md).
- `response`: The result of the asychronous request.

<a id="Discussion"></a>

## Discussion

Your driver extension class invokes this method to complete an asynchronous request.

## See Also

### Managing Tasks

- [UserProcessParallelTask](userprocessparalleltask.md): Processes a parallel task in response to a call from the framework.
- [SCSIUserParallelTask](../scsiuserparalleltask.md): The properties of a parallel task to perform.
- [SCSIUserParallelResponse](../scsiuserparallelresponse.md): The properties of a completed request.
