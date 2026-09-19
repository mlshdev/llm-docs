> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/accountproviderauthenticationtoken

# accountProviderAuthenticationToken (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 13.0+ · visionOS 1.0+

An authentication session token that your app sends to the account provider.

## Declaration

```swift
var accountProviderAuthenticationToken: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Only TV provider apps use this property.

# accountProviderAuthenticationToken (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS · tvOS 13.0+ · visionOS 1.0+

An authentication session token that your app sends to the account provider.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * accountProviderAuthenticationToken;
```

<a id="Discussion"></a>

## Discussion

Only TV provider apps use this property.
