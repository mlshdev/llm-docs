> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/scheduler-implementations](https://developer.apple.com/documentation/foundation/runloop/scheduler-implementations)

# Scheduler Implementations

**Framework:** Foundation  
**Kind:** API Collection

## Topics

### Structures

- [RunLoop.SchedulerOptions](scheduleroptions.md): A set of options that affect the operation of the run loop scheduler.
- [RunLoop.SchedulerTimeType](schedulertimetype.md): The scheduler time type that the run loop uses.

### Instance Properties

- [minimumTolerance](minimumtolerance.md): The minimum tolerance the run loop scheduler allows.
- [now](now.md): The run loop scheduler’s definition of the current moment in time.

### Instance Methods

- [schedule(after:interval:tolerance:options:\_:)](schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, using the specified tolerance and options.
- [schedule(after:tolerance:options:\_:)](schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, using the specified tolerance and options.
- [schedule(options:\_:)](schedule%28options___%29.md): Performs the action at some time after the specified date, using the scheduler’s minimum tolerance.
