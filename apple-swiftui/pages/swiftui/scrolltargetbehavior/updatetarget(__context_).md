> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltargetbehavior/updatetarget(_:context:)](https://developer.apple.com/documentation/swiftui/scrolltargetbehavior/updatetarget(_:context:))

# updateTarget(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Updates the proposed target that a scrollable view should scroll to.

## Declaration

```swift
func updateTarget(_ target: inout ScrollTarget, context: Self.TargetContext)
```

<a id="discussion"></a>

## Discussion

The system calls this method in two main cases:

- When a scroll gesture ends, it calculates where it would naturally scroll to using its deceleration rate. The system provides this calculated value as the target of this method.
- When a scrollable view’s size changes, it calculates where it should be scrolled given the new size and provides this calculates value as the target of this method.

You can implement this method to override the calculated target which will have the scrollable view scroll to a different position than it would otherwise.

## See Also

### Updating the proposed target

- [ScrollTargetBehavior.TargetContext](targetcontext.md): The context in which a scroll behavior updates the scroll target.
