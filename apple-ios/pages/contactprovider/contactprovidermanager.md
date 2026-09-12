> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager](https://developer.apple.com/documentation/contactprovider/contactprovidermanager)

# ContactProviderManager

**Framework:** ContactProvider  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An interface for the app to control its extension.

## Declaration

```swift
class ContactProviderManager
```

<a id="overview"></a>

## Overview

Use this class to initially enable your contact provider app extension, making it visible to the system and other apps. To use the default domain, create a manager and call [enable()](contactprovidermanager/enable%28%29.md). This is an `async` call, because it may prompt the person using your app to approve turning on the contact provider.

```swift
import ContactProvider

func enableExtensionExample() async {
    do {
        // The app creates a contact provider manager with a default domain.
        let manager = try ContactProviderManager()
        
        // May prompt the person to enable the default domain.
        try await manager.enable()
    } catch {
        // Handle the error.
    }
}
```

<a id="Signaling-the-app-extension"></a>

### Signaling the app extension

You also use `ContactProviderManager` when you need to invoke the app extension on demand. For example, when your app knows new contacts are available from your server, call [signalEnumerator(for:)](contactprovidermanager/signalenumerator%28for_%29.md) so the extension can fetch and provide the changed contacts.

```swift
import ContactProvider

func refreshForNewContacts() async {
    do {
        let manager = try ContactProviderManager()
        try await manager.signalEnumerator()
    } catch {
        // Handle the error.
    }
}
```

> **Important**

> You can only use `ContactProviderManager` in an app, not in an app extension.

## Topics

### Creating a contact provider manager

- [init(domainIdentifier:)](contactprovidermanager/init%28domainidentifier_%29.md): Creates a provider manager.

### Invoking the app extension

- [signalEnumerator(for:)](contactprovidermanager/signalenumerator%28for_%29.md): Requests that the extension enumerate its contacts for the domain.

### Managing the contact provider manager life cycle

- [invalidate()](contactprovidermanager/invalidate%28%29.md): Requests that the extension terminate.

### Managing the domain

- [domain](contactprovidermanager/domain.md): The domain that this instance manages.
- [enable()](contactprovidermanager/enable%28%29.md): Requests the person using the app to enable the extension domain.
- [isEnabled](contactprovidermanager/isenabled.md): A Boolean value that indicates whether the person using the app enabled the extension domain.
- [reset()](contactprovidermanager/reset%28%29.md): Resets the extension domain.
- [disable()](contactprovidermanager/disable%28%29.md): Disables the extension domain.
