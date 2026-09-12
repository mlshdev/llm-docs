> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/sortdescriptor/keypath](https://developer.apple.com/documentation/foundation/sortdescriptor/keypath)

# keyPath

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The key path to the field for comparison.

## Declaration

```swift
var keyPath: PartialKeyPath<Compared>? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` when `Compared` is not an NSObject
