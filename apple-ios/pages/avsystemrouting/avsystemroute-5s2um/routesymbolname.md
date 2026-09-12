> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um/routesymbolname](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um/routesymbolname)

# routeSymbolName

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The SF Symbol name representing the remote device or route.

## Declaration

```swift
final var routeSymbolName: String { get }
```

## Mentioned In

- [Routing and streaming media to remote devices](../routing-and-streaming-media-to-remote-devices.md)

<a id="discussion"></a>

## Discussion

This property returns a system symbol name as a `String` that identifies the type of device (such as a TV, speaker, or other compatible endpoint). Use this value with `Image(systemName:)` to create an icon for display in your app’s user interface.

```swift
let routeIcon = Image(systemName: route.routeSymbolName)
```

The symbol helps people visually identify where their media will be played.
