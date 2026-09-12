> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountproviderresponse/authenticationscheme](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderresponse/authenticationscheme)

# authenticationScheme (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The authentication scheme type of the response.

## Declaration

```swift
var authenticationScheme: VSAccountProviderAuthenticationScheme { get }
```

<a id="Discussion"></a>

## Discussion

This property identifies the authentication scheme the account provider used to construct the response. For a list of types, see [VSAccountProviderAuthenticationScheme](../vsaccountproviderauthenticationscheme.md).

## See Also

### Getting Response Info

- [body](body.md): The raw response from the provider.
- [status](status.md): The status code for the response.

# authenticationScheme (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The authentication scheme type of the response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) VSAccountProviderAuthenticationScheme authenticationScheme;
```

<a id="Discussion"></a>

## Discussion

This property identifies the authentication scheme the account provider used to construct the response. For a list of types, see [VSAccountProviderAuthenticationScheme](../vsaccountproviderauthenticationscheme.md).

## See Also

### Getting Response Info

- [body](body.md): The raw response from the provider.
- [status](status.md): The status code for the response.
