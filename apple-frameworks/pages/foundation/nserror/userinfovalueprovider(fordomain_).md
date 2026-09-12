> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/userinfovalueprovider(fordomain:)](https://developer.apple.com/documentation/foundation/nserror/userinfovalueprovider(fordomain:))

# userInfoValueProvider(forDomain:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns any user info provider specified for a given error domain.

## Declaration

```swift
class func userInfoValueProvider(forDomain errorDomain: String) -> (@Sendable (any Error, String) -> Any?)?
```

## Parameters

- `errorDomain`: The error domain of the user info provider.

<a id="return-value"></a>

## Return Value

The user info provider of the error domain, or `nil` if none is specified.

## See Also

### Providing Error User Info

- [setUserInfoValueProvider(forDomain:provider:)](setuserinfovalueprovider%28fordomain_provider_%29.md): Specifies a block to call when the corresponding property is not present in the user info dictionary.
- [ErrorUserInfoKey](../erroruserinfokey.md): These keys may exist in the user info dictionary.
- [NSError.UserInfoKey](userinfokey.md): These keys may exist in the user info dictionary.

# userInfoValueProviderForDomain: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns any user info provider specified for a given error domain.

## Declaration

```objectivec
+ (id (^)(NSError *, NSString *)) userInfoValueProviderForDomain:(NSErrorDomain) errorDomain;
```

## Parameters

- `errorDomain`: The error domain of the user info provider.

<a id="return-value"></a>

## Return Value

The user info provider of the error domain, or `nil` if none is specified.

## See Also

### Providing Error User Info

- [setUserInfoValueProviderForDomain:provider:](setuserinfovalueprovider%28fordomain_provider_%29.md): Specifies a block to call when the corresponding property is not present in the user info dictionary.
- [NSErrorUserInfoKey](userinfokey.md): These keys may exist in the user info dictionary.
