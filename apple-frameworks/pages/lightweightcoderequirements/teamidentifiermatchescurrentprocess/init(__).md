> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/teamidentifiermatchescurrentprocess/init(_:)](https://developer.apple.com/documentation/lightweightcoderequirements/teamidentifiermatchescurrentprocess/init(_:))

# init(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a constraint that tests whether a process’s team identifier matches the current process’s team identifier.

## Declaration

```swift
init(_ value: Bool)
```

## Parameters

- `value`: A Boolean that indicates whether the constraint matches processes with the same team identifier, or any other team identifier.
