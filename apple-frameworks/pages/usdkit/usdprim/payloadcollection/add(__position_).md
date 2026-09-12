> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/payloadcollection/add(_:position:)](https://developer.apple.com/documentation/usdkit/usdprim/payloadcollection/add(_:position:))

# add(\_:position:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an existing payload arc to the prim.

## Declaration

```swift
func add(_ payload: USDPrim.Payload, position: USDPrim.ListPosition = .backOfPrependList) throws
```

## Parameters

- `payload`: The payload to add.
- `position`: Where to insert the payload in the prim’s payload list.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the payload cannot be added.
