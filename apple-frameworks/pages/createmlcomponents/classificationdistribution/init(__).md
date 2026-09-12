> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationdistribution/init(_:)](https://developer.apple.com/documentation/createmlcomponents/classificationdistribution/init(_:))

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a classification distribution.

## Declaration

```swift
init<C>(_ classifications: C) where C : Collection, C.Element == Classification<Label>
```

## Parameters

- `classifications`: A collection of classifications.

<a id="discussion"></a>

## Discussion

> **Precondition**

> The classifications must contain unique labels.
