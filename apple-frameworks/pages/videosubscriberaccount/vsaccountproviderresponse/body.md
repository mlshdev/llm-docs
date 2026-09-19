> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderresponse/body

# body (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The raw response from the provider.

## Declaration

```swift
var body: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the response contains security-sensitive information.

## See Also

### Getting Response Info

- [authenticationScheme](authenticationscheme.md): The authentication scheme type of the response.
- [status](status.md): The status code for the response.

# body (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The raw response from the provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * body;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the response contains security-sensitive information.

## See Also

### Getting Response Info

- [authenticationScheme](authenticationscheme.md): The authentication scheme type of the response.
- [status](status.md): The status code for the response.
