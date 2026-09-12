> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/run(_:)](https://developer.apple.com/documentation/automator/amworkflowcontroller/run(_:))

# run(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Runs the associated workflow, after first clearing any results stored by its actions during any previous run.

## Declaration

```swift
@IBAction func run(_ sender: Any)
```

## Parameters

- `sender`: Object that initiated the run action.

## See Also

### Controlling the Workflow

- [pause(\_:)](pause%28__%29.md): Pauses a workflow that’s running.
- [reset(\_:)](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [step(\_:)](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop(\_:)](stop%28__%29.md): Stops the associated workflow.

# run: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Runs the associated workflow, after first clearing any results stored by its actions during any previous run.

## Declaration

```objectivec
- (void) run:(id) sender;
```

## Parameters

- `sender`: Object that initiated the run action.

## See Also

### Controlling the Workflow

- [pause:](pause%28__%29.md): Pauses a workflow that’s running.
- [reset:](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [step:](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop:](stop%28__%29.md): Stops the associated workflow.
