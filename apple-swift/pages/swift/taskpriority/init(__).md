> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/taskpriority/init(_:)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Convert this [JobPriority](../jobpriority.md) to a [TaskPriority](../taskpriority.md).

## Declaration

```swift
init?(_ p: JobPriority)
```

<a id="discussion"></a>

## Discussion

Most values are directly interchangeable, but this initializer reserves the right to fail for certain values.
