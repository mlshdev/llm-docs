> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mirror/ancestorrepresentation/customized(_:)](https://developer.apple.com/documentation/swift/mirror/ancestorrepresentation/customized(_:))

# Mirror.AncestorRepresentation.customized(\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Uses the nearest ancestor’s implementation of `customMirror` to create a mirror for that ancestor.

## Declaration

```swift
case customized(() -> Mirror)
```

<a id="discussion"></a>

## Discussion

Other classes derived from such an ancestor are given a default mirror. The payload for this option should always be `{ super.customMirror }`:

```swift
var customMirror: Mirror {
    return Mirror(
        self,
        children: ["someProperty": self.someProperty],
        ancestorRepresentation: .customized({ super.customMirror })) // <==
}
```
