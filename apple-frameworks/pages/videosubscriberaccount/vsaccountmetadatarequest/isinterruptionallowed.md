> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/isinterruptionallowed](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/isinterruptionallowed)

# isInterruptionAllowed (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.

## Declaration

```swift
var isInterruptionAllowed: Bool { get set }
```

## See Also

### Specifying Additional Options

- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

# interruptionAllowed (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isInterruptionAllowed) BOOL interruptionAllowed;
```

## See Also

### Specifying Additional Options

- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.
