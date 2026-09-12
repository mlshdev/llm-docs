> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/forceauthentication](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/forceauthentication)

# forceAuthentication (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the app ignores cached credentials.

## Declaration

```swift
var forceAuthentication: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your app cannot use cached credentials; if [false](https://developer.apple.com/documentation/swift/false), your app attempts to use any available cached credentials.

## See Also

### Specifying Additional Options

- [isInterruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

# forceAuthentication (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the app ignores cached credentials.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL forceAuthentication;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), your app cannot use cached credentials; if [false](https://developer.apple.com/documentation/swift/false), your app attempts to use any available cached credentials.

## See Also

### Specifying Additional Options

- [interruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [localizedVideoTitle](localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.
