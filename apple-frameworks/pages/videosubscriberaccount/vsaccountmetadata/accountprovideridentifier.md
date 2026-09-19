> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata/accountprovideridentifier

# accountProviderIdentifier (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The unique identifier of the account provider.

## Declaration

```swift
var accountProviderIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to brand your app.

## See Also

### Getting TV Provider Info

- [authenticationExpirationDate](authenticationexpirationdate.md): The date when the user’s current authentication session expires.

# accountProviderIdentifier (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The unique identifier of the account provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * accountProviderIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to brand your app.

## See Also

### Getting TV Provider Info

- [authenticationExpirationDate](authenticationexpirationdate.md): The date when the user’s current authentication session expires.
