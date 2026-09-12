> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticbigint/custommirror](https://developer.apple.com/documentation/swift/staticbigint/custommirror)

# customMirror

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The custom mirror for this instance.

## Declaration

```swift
var customMirror: Mirror { get }
```

<a id="discussion"></a>

## Discussion

If this type has value semantics, the mirror should be unaffected by subsequent mutations of the instance.
