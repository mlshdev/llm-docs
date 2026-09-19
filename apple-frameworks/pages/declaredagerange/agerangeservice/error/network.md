> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/agerangeservice/error/network

# AgeRangeService.Error.network

**Framework:** Declared Age Range  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates a network or server issue prevented completing the age range request.

## Declaration

```swift
case network
```

<a id="discussion"></a>

## Discussion

You receive this error when the system can’t reach the server to fetch or update the age range or related parental controls information. Retry the request when network conditions improve.
