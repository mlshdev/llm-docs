> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mirror/subjecttype

# subjectType

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The static type of the subject being reflected.

## Declaration

```swift
let subjectType: any Any.Type
```

<a id="discussion"></a>

## Discussion

This type may differ from the subject’s dynamic type when this mirror is the `superclassMirror` of another mirror.
