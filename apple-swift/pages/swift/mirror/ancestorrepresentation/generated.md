> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mirror/ancestorrepresentation/generated

# Mirror.AncestorRepresentation.generated

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Generates a default mirror for all ancestor classes.

## Declaration

```swift
case generated
```

<a id="discussion"></a>

## Discussion

This case is the default when initializing a `Mirror` instance.

When you use this option, a subclass’s mirror generates default mirrors even for ancestor classes that conform to the `CustomReflectable` protocol. To avoid dropping the customization provided by ancestor classes, an override of `customMirror` should pass `.customized({ super.customMirror })` as `ancestorRepresentation` when initializing its mirror.
