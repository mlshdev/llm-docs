> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externallinkaccount/open()](https://developer.apple.com/documentation/storekit/externallinkaccount/open())

# open()

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.4+

Presents a continuation sheet that enables people to choose whether to open your app’s link to an external website for account creation or management.

## Declaration

```swift
static func open() async throws
```

<a id="Discussion"></a>

## Discussion

Call this method in response to deliberate user interaction, for example, tapping a button. Call [canOpen](canopen.md) to determine whether to display a button or other user-interface control. If [canOpen](canopen.md) is `false`, this method always throws a [StoreKitError](../storekiterror.md) instance.

## See Also

### Linking to external accounts

- [canOpen](canopen.md): A Boolean value that indicates whether the app can open the external link account.
