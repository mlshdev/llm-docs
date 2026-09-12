> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/featuredaccountprovideridentifiers](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/featuredaccountprovideridentifiers)

# featuredAccountProviderIdentifiers (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS · tvOS 11.0+ · visionOS 1.0+

The providers your app lists prominently during authentication.

## Declaration

```swift
var featuredAccountProviderIdentifiers: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which providers your app gives prominent placement to when it asks the user to choose an account provider for authentication. By default, no providers are promoted.

## See Also

### Specifying Additional Options

- [isInterruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

# featuredAccountProviderIdentifiers (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS · tvOS 11.0+ · visionOS 1.0+

The providers your app lists prominently during authentication.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * featuredAccountProviderIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which providers your app gives prominent placement to when it asks the user to choose an account provider for authentication. By default, no providers are promoted.

## See Also

### Specifying Additional Options

- [interruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.
