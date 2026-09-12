> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mainactor/shared](https://developer.apple.com/documentation/swift/mainactor/shared)

# shared

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The shared actor instance that will be used to provide mutually-exclusive access to declarations annotated with the given global actor type.

## Declaration

```swift
static let shared: MainActor
```

<a id="discussion"></a>

## Discussion

The value of this property must always evaluate to the same actor instance.
