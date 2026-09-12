> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/unapprovedcount](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/unapprovedcount)

# unapprovedCount

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The number of identity entries that someone hasn’t yet enabled.

## Declaration

```swift
var unapprovedCount: Int { get }
```

<a id="discussion"></a>

## Discussion

For app extensions that reside outside the host app, a person must approve the use of an app extension before the host app can use it. This property reflects the number of app extensions currently waiting for approval. If the value of this property is greater than zero, consider presenting [EXAppExtensionBrowserViewController](../../../../extensionkit/exappextensionbrowserviewcontroller.md) to display the extension enablement UI.

## See Also

### Getting the app extension status

- [identities](identities.md): The set of approved and enabled app extensions.
- [disabledCount](disabledcount.md): The number of app extensions that someone disabled.
