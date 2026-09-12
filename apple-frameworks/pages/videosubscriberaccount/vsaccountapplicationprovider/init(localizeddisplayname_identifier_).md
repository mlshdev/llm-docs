> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountapplicationprovider/init(localizeddisplayname:identifier:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountapplicationprovider/init(localizeddisplayname:identifier:))

# init(localizedDisplayName:identifier:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Initializer  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

Returns an application provider using a given display name and identifier.

## Declaration

```swift
init(localizedDisplayName: String, identifier: String)
```

## Parameters

- `localizedDisplayName`: The display name of the provider as it will appear in the list of providers.
- `identifier`: The identifier of the provider.

# initWithLocalizedDisplayName:identifier: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

Returns an application provider using a given display name and identifier.

## Declaration

```objectivec
- (instancetype) initWithLocalizedDisplayName:(NSString *) localizedDisplayName identifier:(NSString *) identifier;
```

## Parameters

- `localizedDisplayName`: The display name of the provider as it will appear in the list of providers.
- `identifier`: The identifier of the provider.
