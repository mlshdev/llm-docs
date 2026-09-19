> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedstructure/init(from:)

# init(from:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Creates a captured structure by deserializing the decoder of a prior captured structure.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: An encoded captured structure object.
