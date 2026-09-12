> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/finish()](https://developer.apple.com/documentation/swift/asyncstream/continuation/finish())

# finish()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resume the task awaiting the next iteration point by having it return nil, which signifies the end of the iteration.

## Declaration

```swift
func finish()
```

<a id="discussion"></a>

## Discussion

Calling this function more than once has no effect. After calling finish, the stream enters a terminal state and doesn’t produce any additional elements.
