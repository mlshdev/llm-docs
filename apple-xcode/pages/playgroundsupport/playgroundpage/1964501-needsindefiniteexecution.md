> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/1964501-needsindefiniteexecution](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/1964501-needsindefiniteexecution)

# needsIndefiniteExecution

**Framework:** Playground Support  
**Kind:** Instance Property  
**Availability:** macOS 11.0+ · Xcode 10.2+ · Swift Playgrounds 2.0+

A Boolean value that indicates whether indefinite execution is enabled.

## Declaration

```swift
final var needsIndefiniteExecution: Bool { get set }
```

```swift
var needsIndefiniteExecution: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, all top-level code is executed, and then execution is terminated. When working with asynchronous code, enable indefinite execution to allow execution to continue after the end of the playground’s top-level code is reached. This, in turn, gives threads and callbacks time to execute.

With a traditional live view, editing the playground automatically stops execution, even when indefinite execution is enabled. When using the always-on live view, execution continues whether or not indefinite execution is enabled.

Set [needsIndefiniteExecution](1964501-needsindefiniteexecution.md) to `true` to continue execution after the end of top-level code. Set it to `false` to stop execution at that point.

The default value is [false](https://developer.apple.com/documentation/swift/false). It's set to true when [liveView](1964506-liveview.md) is set to a non-`nil` value.

## See Also

### Configuring Execution

- [executionMode](3029561-executionmode.md): The currently selected speed for executing the code on this playground page.
- [PlaygroundPage.ExecutionMode](executionmode.md): The available speeds for executing the code on a playground page.
- [finishExecution()](1964505-finishexecution.md): Terminates execution of the current playground page.
