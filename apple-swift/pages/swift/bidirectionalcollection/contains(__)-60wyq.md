> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/bidirectionalcollection/contains(_:)-60wyq

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether this collection contains a match for the regex, where the regex is created by the given closure.

## Declaration

```swift
func contains(@RegexComponentBuilder _ content: () -> some RegexComponent) -> Bool
```

## Parameters

- `content`: A closure that returns a regex to search for within this collection.

<a id="return-value"></a>

## Return Value

`true` if the regex returned by `content` matched anywhere in this collection, otherwise `false`.
