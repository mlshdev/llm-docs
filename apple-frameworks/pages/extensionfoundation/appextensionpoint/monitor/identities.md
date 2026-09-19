> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/identities

# identities

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The app extensions currently available to use with the monitored extension points.

## Declaration

```swift
final var identities: [AppExtensionIdentity] { get }
```

## Mentioned In

- [Discovering app extensions from your app](../../discovering-app-extensions-from-your-app.md)

<a id="discussion"></a>

## Discussion

Use this property to get an array of currently available app extensions your host app can use. This array contains entries for all of the monitored extension points. To find out if additional app extensions are present, but not yet enabled, get the value in the [state](state-swift.property.md) property instead.
