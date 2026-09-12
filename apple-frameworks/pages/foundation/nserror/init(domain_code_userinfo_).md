> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/init(domain:code:userinfo:)](https://developer.apple.com/documentation/foundation/nserror/init(domain:code:userinfo:))

# init(domain:code:userInfo:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSError` object initialized for a given domain and code with a given `userInfo` dictionary.

## Declaration

```swift
init(domain: String, code: Int, userInfo dict: [String : Any]? = nil)
```

## Parameters

- `domain`: The error domain—this can be one of the predefined `NSError` domains, or an arbitrary string describing a custom domain. `domain` must not be `nil`. See `Error Domains` for a list of predefined domains.
- `code`: The error code for the error.
- `dict`: The `userInfo` dictionary for the error. `userInfo` may be `nil`.

<a id="return-value"></a>

## Return Value

An `NSError` object initialized for `domain` with the specified error `code` and the dictionary of arbitrary data `userInfo`.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSError`.

# initWithDomain:code:userInfo: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSError` object initialized for a given domain and code with a given `userInfo` dictionary.

## Declaration

```objectivec
- (instancetype) initWithDomain:(NSErrorDomain) domain code:(NSInteger) code userInfo:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `domain`: The error domain—this can be one of the predefined `NSError` domains, or an arbitrary string describing a custom domain. `domain` must not be `nil`. See `Error Domains` for a list of predefined domains.
- `code`: The error code for the error.
- `dict`: The `userInfo` dictionary for the error. `userInfo` may be `nil`.

<a id="return-value"></a>

## Return Value

An `NSError` object initialized for `domain` with the specified error `code` and the dictionary of arbitrary data `userInfo`.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `NSError`.

## See Also

### Related Documentation

- [errorWithDomain:code:userInfo:](errorwithdomain_code_userinfo_.md): Creates and initializes an `NSError` object for a given domain and code with a given `userInfo` dictionary.

### Creating Error Objects

- [errorWithDomain:code:userInfo:](errorwithdomain_code_userinfo_.md): Creates and initializes an `NSError` object for a given domain and code with a given `userInfo` dictionary.
