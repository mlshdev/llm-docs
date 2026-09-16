> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/bidirectionalcollection/contains(_:)-1l08t

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the collection contains the given regex.

## Declaration

```swift
func contains(_ regex: some RegexComponent) -> Bool
```

## Parameters

- `regex`: A regex to search for within this collection.

<a id="return-value"></a>

## Return Value

`true` if the regex was found in the collection, otherwise `false`.
