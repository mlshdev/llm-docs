> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/disabledcount](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct/disabledcount)

# disabledCount

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The number of app extensions that someone disabled.

## Declaration

```swift
var disabledCount: Int { get }
```

<a id="discussion"></a>

## Discussion

A person can disable app extensions to prevent your host app from loading them. This property reflects the number of app extensions someone explicitly disabled.

## See Also

### Getting the app extension status

- [identities](identities.md): The set of approved and enabled app extensions.
- [unapprovedCount](unapprovedcount.md): The number of identity entries that someone hasn’t yet enabled.
