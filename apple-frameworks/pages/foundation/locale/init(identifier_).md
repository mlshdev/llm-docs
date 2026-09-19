> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/locale/init(identifier:)

# init(identifier:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a locale with the specified identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: A BCP-47 language identifier such as `en_US` or `en-u-nu-thai-ca-buddhist`, or an ICU-style identifier such as `en@calendar=buddhist;numbers=thai`.
