> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/attoseconds](https://developer.apple.com/documentation/swift/duration/attoseconds)

# attoseconds

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The number of attoseconds represented by this `Duration`.

## Declaration

```swift
var attoseconds: Int128 { get }
```

<a id="discussion"></a>

## Discussion

This property provides direct access to the underlying number of attoseconds that the current `Duration` represents.

```swift
let d = Duration.seconds(1)
print(d.attoseconds) // 1_000_000_000_000_000_000
```
