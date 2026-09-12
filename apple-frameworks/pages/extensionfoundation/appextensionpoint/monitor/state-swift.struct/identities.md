> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/identities](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/identities)

# identities

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The set of approved and enabled app extensions.

## Declaration

```swift
var identities: [AppExtensionIdentity] { get }
```

<a id="discussion"></a>

## Discussion

Use this property to get the set of app extensions your host app can currently load.

## See Also

### Getting the app extension status

- [disabledCount](disabledcount.md): The number of app extensions that someone disabled.
- [unapprovedCount](unapprovedcount.md): The number of identity entries that someone hasn’t yet enabled.
