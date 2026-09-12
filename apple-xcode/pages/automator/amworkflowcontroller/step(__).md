> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflowcontroller/step(_:)](https://developer.apple.com/documentation/automator/amworkflowcontroller/step(_:))

# step(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

In a paused workflow, runs the next action in the workflow and then pauses again.

## Declaration

```swift
@IBAction func step(_ sender: Any)
```

## Parameters

- `sender`: Object that initiated the step action.

<a id="Discussion"></a>

## Discussion

Stepping allows a workflow to be executed one action at a time. This is useful for ensuring that the workflow is doing what it’s supposed to do, as the results of each individual action can be inspected before moving on to the next.

## See Also

### Controlling the Workflow

- [pause(\_:)](pause%28__%29.md): Pauses a workflow that’s running.
- [reset(\_:)](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run(\_:)](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [stop(\_:)](stop%28__%29.md): Stops the associated workflow.

# step: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

In a paused workflow, runs the next action in the workflow and then pauses again.

## Declaration

```objectivec
- (void) step:(id) sender;
```

## Parameters

- `sender`: Object that initiated the step action.

<a id="Discussion"></a>

## Discussion

Stepping allows a workflow to be executed one action at a time. This is useful for ensuring that the workflow is doing what it’s supposed to do, as the results of each individual action can be inspected before moving on to the next.

## See Also

### Controlling the Workflow

- [pause:](pause%28__%29.md): Pauses a workflow that’s running.
- [reset:](reset%28__%29.md): Stops a workflow, clears any action results, and resets the workflow back to an un-run state.
- [run:](run%28__%29.md): Runs the associated workflow, after first clearing any results stored by its actions during any previous run.
- [stop:](stop%28__%29.md): Stops the associated workflow.
