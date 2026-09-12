> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/stop(_:)](https://developer.apple.com/documentation/automator/amworkflowcontroller/stop(_:))

# stop(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Stops the associated workflow.

## Declaration

```swift
@IBAction func stop(_ sender: Any)
```

## Parameters

- `sender`: Object that initiated the stop action.

## See Also

### Controlling the Workflow

- [pause(\_:)](pause%28__%29.md): Pauses a workflow that’s running.
- [reset(\_:)](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run(\_:)](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step(\_:)](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.

# stop: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Stops the associated workflow.

## Declaration

```objectivec
- (void) stop:(id) sender;
```

## Parameters

- `sender`: Object that initiated the stop action.

## See Also

### Controlling the Workflow

- [pause:](pause%28__%29.md): Pauses a workflow that’s running.
- [reset:](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run:](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step:](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
