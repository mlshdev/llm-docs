> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/localizedvideotitle](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/localizedvideotitle)

# localizedVideoTitle (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A short, user-presentable name for the video that the user wants to play.

## Declaration

```swift
var localizedVideoTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to display a short localized name for the video your app will play if the request is successful. For example, `My Cool Movie` or `My Favorite Show S2 E5`.

A value is not required if your app isn’t sending the request to play a specific video.

## See Also

### Specifying Additional Options

- [isInterruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

# localizedVideoTitle (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A short, user-presentable name for the video that the user wants to play.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * localizedVideoTitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to display a short localized name for the video your app will play if the request is successful. For example, `My Cool Movie` or `My Favorite Show S2 E5`.

A value is not required if your app isn’t sending the request to play a specific video.

## See Also

### Specifying Additional Options

- [interruptionAllowed](isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [applicationAccountProviders](applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.
