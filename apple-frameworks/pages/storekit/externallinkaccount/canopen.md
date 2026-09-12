> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externallinkaccount/canopen](https://developer.apple.com/documentation/storekit/externallinkaccount/canopen)

# canOpen

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.4+

A Boolean value that indicates whether the app can open the external link account.

## Declaration

```swift
static var canOpen: Bool { get async }
```

<a id="Discussion"></a>

## Discussion

Check this property before showing any user-interface controls that enable people to open the external link account.

Don’t check this property again in response to user input; instead, call [open()](open%28%29.md) immediately.

> **Important**

>  Only show user-interface controls that call the [open()](open%28%29.md) method if this property is `true`. The [open()](open%28%29.md) method always throws an error when [canOpen](canopen.md) is `false`.

## See Also

### Linking to external accounts

- [open()](open%28%29.md): Presents a continuation sheet that enables people to choose whether to open your app’s link to an external website for account creation or management.
