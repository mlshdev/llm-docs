> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountproviderresponse/status](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderresponse/status)

# status (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The status code for the response.

## Declaration

```swift
var status: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the response doesn’t match an existing status type.

## See Also

### Getting Response Info

- [authenticationScheme](authenticationscheme.md): The authentication scheme type of the response.
- [body](body.md): The raw response from the provider.

# status (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The status code for the response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * status;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the response doesn’t match an existing status type.

## See Also

### Getting Response Info

- [authenticationScheme](authenticationscheme.md): The authentication scheme type of the response.
- [body](body.md): The raw response from the provider.
