> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/custommirror](https://developer.apple.com/documentation/swift/staticstring/custommirror)

# customMirror

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The custom mirror for this instance.

## Declaration

```swift
var customMirror: Mirror { get }
```

<a id="discussion"></a>

## Discussion

If this type has value semantics, the mirror should be unaffected by subsequent mutations of the instance.
