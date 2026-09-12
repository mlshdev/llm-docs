> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/applicationaccountproviders](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/applicationaccountproviders)

# applicationAccountProviders (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

An array of application-specific providers to add to the list of account providers.

## Declaration

```swift
var applicationAccountProviders: [VSAccountApplicationProvider]? { get set }
```

## See Also

### Specifying Additional Options

- [isInterruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.

# applicationAccountProviders (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

An array of application-specific providers to add to the list of account providers.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<VSAccountApplicationProvider *> * applicationAccountProviders;
```

## See Also

### Specifying Additional Options

- [interruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
