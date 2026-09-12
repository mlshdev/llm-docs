> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataextension/init(displayname:developername:identifier:storeidentifier:)](https://developer.apple.com/documentation/browserkit/bebrowserdataextension/init(displayname:developername:identifier:storeidentifier:))

# init(displayName:developerName:identifier:storeIdentifier:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes an extension with its identifying information and App Store reference.

## Declaration

```swift
init(displayName: String, developerName: String, identifier: String, storeIdentifier: String)
```

## Parameters

- `displayName`: The localized display name of the extension.
- `developerName`: The name of the extension’s developer.
- `identifier`: A unique identifier for the extension.
- `storeIdentifier`: The App Store identifier for the extension, or `nil` if not available.

# initWithDisplayName:developerName:identifier:storeIdentifier: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes an extension with its identifying information and App Store reference.

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) displayName developerName:(NSString *) developerName identifier:(NSString *) identifier storeIdentifier:(NSString *) storeIdentifier;
```

## Parameters

- `displayName`: The localized display name of the extension.
- `developerName`: The name of the extension’s developer.
- `identifier`: A unique identifier for the extension.
- `storeIdentifier`: The App Store identifier for the extension, or `nil` if not available.
