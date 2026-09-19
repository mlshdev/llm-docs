> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/accessorysensorupdates/init(for:)

# init(for:)

**Framework:** AudioAccessoryKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+

Creates a sensor update sequence for the specified accessory.

## Declaration

```swift
init(for accessoryIdentifier: String)
```

## Parameters

- `accessoryIdentifier`: The UID identifying the accessory, obtained from the `AudioUnit` initialization parameters passed to the Audio Rendering Extension.

<a id="discussion"></a>

## Discussion

Multiple iterators created from the same value — or from copies of it — all receive every packet over a single shared XPC connection. No XPC resources are acquired until the first iteration begins.
