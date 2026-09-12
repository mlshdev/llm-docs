> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationname/pkpasslibrarydidchange](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationname/pkpasslibrarydidchange)

# PKPassLibraryDidChange (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A notification that PassKit posts when the pass library changes.

## Declaration

```swift
static let PKPassLibraryDidChange: PKPassLibraryNotificationName
```

<a id="Discussion"></a>

## Discussion

PassKit posts this notification on an arbitary queue, and only does so if an instance of `PKPassLibrary` exists. The notification’s user info dictionary describes the changes. See [PKPassLibrary](../pkpasslibrary.md) for the keys it uses.

## See Also

### Notification names

- [PKPassLibraryRemotePaymentPassesDidChange](pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.

# PKPassLibraryDidChangeNotification (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A notification that PassKit posts when the pass library changes.

## Declaration

```objectivec
extern PKPassLibraryNotificationName const PKPassLibraryDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

PassKit posts this notification on an arbitary queue, and only does so if an instance of `PKPassLibrary` exists. The notification’s user info dictionary describes the changes. See [PKPassLibrary](../pkpasslibrary.md) for the keys it uses.

## See Also

### Notification names

- [PKPassLibraryRemotePaymentPassesDidChangeNotification](pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.
