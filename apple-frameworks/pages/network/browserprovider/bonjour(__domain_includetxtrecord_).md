> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/browserprovider/bonjour(_:domain:includetxtrecord:)](https://developer.apple.com/documentation/network/browserprovider/bonjour(_:domain:includetxtrecord:))

# bonjour(\_:domain:includeTxtRecord:)

**Framework:** Network  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Bonjour browser provider used to browse for Bonjour services.

## Declaration

```swift
static func bonjour(_ type: String, domain: String? = nil, includeTxtRecord: Bool = false) -> Bonjour
```

## Parameters

- `type`: The Bonjour type to browse for.
- `domain`: Optional Bonjour domain to browse in. If not specified, uses the Bonjour default browse domain, `nil`, which is recommended in most cases.
- `includeTxtRecord`: Boolean specifying whether to query for TXT records.
