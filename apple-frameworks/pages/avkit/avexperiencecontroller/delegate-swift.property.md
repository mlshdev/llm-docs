> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/delegate-swift.property](https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.property)

# delegate

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A delegate object for the experience controller.

## Declaration

```swift
@MainActor weak final var delegate: (any AVExperienceController.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Provide a delegate to have the system notify your app about transitions and other state changes. Use the delegate callbacks to update your app’s state and user interface in response.

## See Also

### Configuring a delegate

- [AVExperienceController.Delegate](delegate-swift.protocol.md): A protocol that defines the methods to implement to respond to experience changes.
