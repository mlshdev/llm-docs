> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mirror/ancestorrepresentation/suppressed](https://developer.apple.com/documentation/swift/mirror/ancestorrepresentation/suppressed)

# Mirror.AncestorRepresentation.suppressed

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suppresses the representation of all ancestor classes.

## Declaration

```swift
case suppressed
```

<a id="discussion"></a>

## Discussion

In a mirror created with this ancestor representation, the `superclassMirror` property is `nil`.
