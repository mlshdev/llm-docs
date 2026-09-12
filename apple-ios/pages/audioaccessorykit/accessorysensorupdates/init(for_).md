> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorysensorupdates/init(for:)](https://developer.apple.com/documentation/audioaccessorykit/accessorysensorupdates/init(for:))

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
