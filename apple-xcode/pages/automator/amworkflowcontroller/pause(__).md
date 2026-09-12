> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/pause(_:)](https://developer.apple.com/documentation/automator/amworkflowcontroller/pause(_:))

# pause(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Pauses a workflow that’s running.

## Declaration

```swift
@IBAction func pause(_ sender: Any)
```

## Parameters

- `sender`: Object that initiated the pause action.

## See Also

### Controlling the Workflow

- [reset(\_:)](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run(\_:)](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step(\_:)](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop(\_:)](stop%28__%29.md): Stops the associated workflow.

# pause: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Pauses a workflow that’s running.

## Declaration

```objectivec
- (void) pause:(id) sender;
```

## Parameters

- `sender`: Object that initiated the pause action.

## See Also

### Controlling the Workflow

- [reset:](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run:](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [step:](step%28__%29.md): In a paused workflow, runs the next action in the workflow and then pauses again.
- [stop:](stop%28__%29.md): Stops the associated workflow.
