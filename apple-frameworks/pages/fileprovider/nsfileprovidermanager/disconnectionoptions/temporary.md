> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/disconnectionoptions/temporary](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/disconnectionoptions/temporary)

# temporary (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** macOS 11.0+

A temporary disconnection.

## Declaration

```swift
static var temporary: NSFileProviderManager.DisconnectionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include the [temporary](temporary.md) value when the disconnection is temporary, such as when updating the domain. Exclude this value when the disconnection isn’t temporary, like when the user logs out.

# NSFileProviderManagerDisconnectionOptionsTemporary (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

A temporary disconnection.

## Declaration

```objectivec
NSFileProviderManagerDisconnectionOptionsTemporary
```

<a id="Discussion"></a>

## Discussion

Include the [NSFileProviderManagerDisconnectionOptionsTemporary](temporary.md) value when the disconnection is temporary, such as when updating the domain. Exclude this value when the disconnection isn’t temporary, like when the user logs out.
