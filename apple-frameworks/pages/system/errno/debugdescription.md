> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/debugdescription](https://developer.apple.com/documentation/system/errno/debugdescription)

# debugDescription

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A textual representation, suitable for debugging, of the most recent error returned by a system call.

## Declaration

```swift
var debugDescription: String { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C function is `strerror(3)`.

## See Also

### Debugging

- [description](description.md): A textual representation of the most recent error returned by a system call.
