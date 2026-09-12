> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/scheduler-implementations](https://developer.apple.com/documentation/foundation/operationqueue/scheduler-implementations)

# Scheduler Implementations

**Framework:** Foundation  
**Kind:** API Collection

## Topics

### Structures

- [OperationQueue.SchedulerOptions](scheduleroptions.md): A type that defines options the operation queue accepts.
- [OperationQueue.SchedulerTimeType](schedulertimetype.md): The scheduler time type the operation queue uses.

### Instance Properties

- [minimumTolerance](minimumtolerance.md): The minimum tolerance the dispatch queue scheduler allows.
- [now](now.md): The operation queue’s definition of the current moment in time.

### Instance Methods

- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, optionally taking into account tolerance if possible.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at the next possible opportunity.
