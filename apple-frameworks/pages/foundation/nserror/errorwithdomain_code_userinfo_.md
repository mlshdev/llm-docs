> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/errorwithdomain:code:userinfo:](https://developer.apple.com/documentation/foundation/nserror/errorwithdomain:code:userinfo:)

# errorWithDomain:code:userInfo:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes an `NSError` object for a given domain and code with a given `userInfo` dictionary.

## Declaration

```objectivec
+ (instancetype) errorWithDomain:(NSErrorDomain) domain code:(NSInteger) code userInfo:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `domain`: The error domain—this can be one of the predefined `NSError` domains, or an arbitrary string describing a custom domain. `domain` must not be `nil`. See `Error Domains` for a list of predefined domains.
- `code`: The error code for the error.
- `dict`: The `userInfo` dictionary for the error. `userInfo` may be `nil`.

<a id="return-value"></a>

## Return Value

An `NSError` object for `domain` with the specified error `code` and the dictionary of arbitrary data `userInfo`.

## See Also

### Related Documentation

- [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806)

### Creating Error Objects

- [initWithDomain:code:userInfo:](init%28domain_code_userinfo_%29.md): Returns an `NSError` object initialized for a given domain and code with a given `userInfo` dictionary.
