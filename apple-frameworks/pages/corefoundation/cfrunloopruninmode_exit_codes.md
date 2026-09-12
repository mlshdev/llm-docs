> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopruninmode_exit_codes](https://developer.apple.com/documentation/corefoundation/cfrunloopruninmode_exit_codes)

# CFRunLoopRunInMode Exit Codes (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.

## Topics

### Constants

- [CFRunLoopRunResult.finished](cfrunlooprunresult/finished.md): The running run loop mode has no sources or timers to process.
- [CFRunLoopRunResult.stopped](cfrunlooprunresult/stopped.md): [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md) was called on the run loop.
- [CFRunLoopRunResult.timedOut](cfrunlooprunresult/timedout.md): The specified time interval for running the run loop has passed.
- [CFRunLoopRunResult.handledSource](cfrunlooprunresult/handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

## See Also

### Constants

- [Common Mode Flag](common-mode-flag.md): A run loop pseudo-mode that manages objects monitored in the “common” modes.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.

# CFRunLoopRunInMode Exit Codes (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.

## Topics

### Constants

- [kCFRunLoopRunFinished](cfrunlooprunresult/finished.md): The running run loop mode has no sources or timers to process.
- [kCFRunLoopRunStopped](cfrunlooprunresult/stopped.md): [CFRunLoopStop](cfrunloopstop%28__%29.md) was called on the run loop.
- [kCFRunLoopRunTimedOut](cfrunlooprunresult/timedout.md): The specified time interval for running the run loop has passed.
- [kCFRunLoopRunHandledSource](cfrunlooprunresult/handledsource.md): A source has been processed. This value is returned only if the run loop was told to run only until a source was processed.

## See Also

### Constants

- [Common Mode Flag](common-mode-flag.md): A run loop pseudo-mode that manages objects monitored in the “common” modes.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.
