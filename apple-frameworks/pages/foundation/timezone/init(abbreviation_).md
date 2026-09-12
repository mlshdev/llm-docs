> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/init(abbreviation:)](https://developer.apple.com/documentation/foundation/timezone/init(abbreviation:))

# init(abbreviation:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone identified by a given abbreviation.

## Declaration

```swift
init?(abbreviation: String)
```

## Parameters

- `abbreviation`: The abbreviation for the time zone.

<a id="return-value"></a>

## Return Value

A time zone identified by abbreviation determined by resolving the abbreviation to an identifier using the abbreviation dictionary and then returning the time zone for that identifier. Returns `nil` if there is no match for abbreviation.

<a id="discussion"></a>

## Discussion

In general, you are discouraged from using abbreviations except for unique instances such as “GMT”. Time Zone abbreviations are not standardized and so a given abbreviation may have multiple meanings–for example, “EST” refers to Eastern Time in both the United States and Australia
