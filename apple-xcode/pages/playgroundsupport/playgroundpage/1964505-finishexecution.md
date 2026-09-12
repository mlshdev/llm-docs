> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/1964505-finishexecution](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/1964505-finishexecution)

# finishExecution()

**Framework:** Playground Support  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ · Xcode 10.2+ · Swift Playgrounds 2.0+

Terminates execution of the current playground page.

## Declaration

```swift
final func finishExecution() -> Never
```

```swift
func finishExecution() -> Never
```

<a id="discussion"></a>

## Discussion

This function immediately terminates any code running in the playground. Call this function when you've set [needsIndefiniteExecution](1964501-needsindefiniteexecution.md) to `true` to indicate that the indefinite period of code execution has ended.

## See Also

### Configuring Execution

- [executionMode](3029561-executionmode.md): The currently selected speed for executing the code on this playground page.
- [PlaygroundPage.ExecutionMode](executionmode.md): The available speeds for executing the code on a playground page.
- [needsIndefiniteExecution](1964501-needsindefiniteexecution.md): A Boolean value that indicates whether indefinite execution is enabled.
