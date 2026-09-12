> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifieridentifier/init(rawvalue:)](https://developer.apple.com/documentation/soundanalysis/snclassifieridentifier/init(rawvalue:))

# init(rawValue:)

**Framework:** Sound Analysis  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an identifier for a sound classifier.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: A string that identifies a sound classifier.

<a id="Discussion"></a>

## Discussion

Don’t create an identifier directly. Use a type property, such as [version1](version1.md), instead.
