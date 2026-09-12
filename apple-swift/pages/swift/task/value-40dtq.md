> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/value-40dtq](https://developer.apple.com/documentation/swift/task/value-40dtq)

# value

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The result from a nonthrowing task, after it completes.

## Declaration

```swift
var value: Success { get async }
```

<a id="discussion"></a>

## Discussion

If the task hasn’t completed yet, accessing this property waits for it to complete and its priority increases to that of the current task. Note that this might not be as effective as creating the task with the correct priority, depending on the executor’s scheduling details.

Tasks that never throw an error can still check for cancellation, but they need to use an approach like returning `nil` instead of throwing an error.

## See Also

### Accessing Results

- [value](value-60t02.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. The result from a throwing task, after it completes.
- [result](result.md): Conforms when `Success` conforms to `Sendable` and `Failure` conforms to `Error`. The result or error from a throwing task, after it completes.
