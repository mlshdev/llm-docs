> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafepointer/pointee

# pointee

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the instance referenced by this pointer.

## Declaration

```swift
var pointee: Pointee { get }
```

<a id="discussion"></a>

## Discussion

When reading from the `pointee` property, the instance referenced by this pointer must already be initialized.
