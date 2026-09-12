> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange)

# PKPassLibraryRemotePaymentPassesDidChange (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A notification that PassKit posts when it adds or removes a pass on a paired remote device.

## Declaration

```swift
static let PKPassLibraryRemotePaymentPassesDidChange: PKPassLibraryNotificationName
```

<a id="Discussion"></a>

## Discussion

PassKit posts this notification on an arbitary queue, and only does so if an instance of `PKPassLibrary` exists. The notification’s user info dictionary describes the changes. See [PKPassLibrary](../pkpasslibrary.md) for the keys it uses.

## See Also

### Notification names

- [PKPassLibraryDidChange](pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.

# PKPassLibraryRemotePaymentPassesDidChangeNotification (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A notification that PassKit posts when it adds or removes a pass on a paired remote device.

## Declaration

```objectivec
extern PKPassLibraryNotificationName const PKPassLibraryRemotePaymentPassesDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

PassKit posts this notification on an arbitary queue, and only does so if an instance of `PKPassLibrary` exists. The notification’s user info dictionary describes the changes. See [PKPassLibrary](../pkpasslibrary.md) for the keys it uses.

## See Also

### Notification names

- [PKPassLibraryDidChangeNotification](pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.
