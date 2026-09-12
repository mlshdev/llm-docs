> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdata/init(sourceapplicationbundleidentifier:sourceapplicationlocalizedname:)](https://developer.apple.com/documentation/browserkit/bebrowserdata/init(sourceapplicationbundleidentifier:sourceapplicationlocalizedname:))

# init(sourceApplicationBundleIdentifier:sourceApplicationLocalizedName:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes browser data with the source app’s identifier and display name.

## Declaration

```swift
init(sourceApplicationBundleIdentifier: String?, sourceApplicationLocalizedName: String?)
```

## Parameters

- `sourceApplicationBundleIdentifier`: The bundle identifier of the source browser app.
- `sourceApplicationLocalizedName`: The localized display name of the source browser app.

## See Also

### Creating a representation of browser data

- [init(coder:)](init%28coder_%29.md): Initializes browser data from a decoder.

# initWithSourceApplicationBundleIdentifier:sourceApplicationLocalizedName: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes browser data with the source app’s identifier and display name.

## Declaration

```objectivec
- (instancetype) initWithSourceApplicationBundleIdentifier:(NSString *) sourceApplicationBundleIdentifier sourceApplicationLocalizedName:(NSString *) sourceApplicationLocalizedName;
```

## Parameters

- `sourceApplicationBundleIdentifier`: The bundle identifier of the source browser app.
- `sourceApplicationLocalizedName`: The localized display name of the source browser app.
