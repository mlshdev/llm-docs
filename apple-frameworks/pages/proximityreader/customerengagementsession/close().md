> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/close()](https://developer.apple.com/documentation/proximityreader/customerengagementsession/close())

# close()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Closes the engagement session.

## Declaration

```swift
final func close() async throws
```

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="discussion"></a>

## Discussion

When this device disconnects, any paired device that is still connected receives a notification to close its side of the session.

## See Also

### Configuring a session

- [CustomerEngagementSession.Configuration](configuration-swift.struct.md): A set of configuration options for a customer engagement session.
- [configuration](configuration-swift.property.md): Configuration for this session.
- [open(using:)](open%28using_%29.md): Opens the engagement session.
- [CustomerEngagementSession.Token](token-swift.struct.md): A session token.
