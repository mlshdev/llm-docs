> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/attributes/initiallyinactive](https://developer.apple.com/documentation/dispatch/dispatchqueue/attributes/initiallyinactive)

# initiallyInactive

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

The newly created queue is inactive.

## Declaration

```swift
static let initiallyInactive: DispatchQueue.Attributes
```

<a id="Discussion"></a>

## Discussion

Normally, a newly created queue schedules submitted blocks for execution immediately. Use this attribute to prevent the queue from scheduling blocks until you call its [activate()](../../dispatchobject/activate%28%29.md) method.

## See Also

### Attributes

- [concurrent](concurrent.md): The queue schedules tasks concurrently.
