> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/social/slrequest/preparedurlrequest()

# preparedURLRequest() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.

## Declaration

```swift
func preparedURLRequest() -> URLRequest!
```

<a id="return-value"></a>

## Return Value

An OAuth-compatible `NSURLRequest` object that allows an app to act on behalf of the user, while keeping the user’s password private. The `NSURLRequest` is signed as OAuth1 by default, or OAuth2 by adding the appropriate token based on the user’s account.

<a id="Discussion"></a>

## Discussion

Use this method to modify your request before sending. By setting the account correctly, this method will automatically add any necessary tokens.

## See Also

### Getting the Request Details

- [requestMethod](requestmethod.md): The method to use for this request.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [url](url.md): The destination URL for this request.
- [parameters](parameters.md): The parameters for this request.

# preparedURLRequest (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.

## Declaration

```objectivec
- (NSURLRequest *) preparedURLRequest;
```

<a id="return-value"></a>

## Return Value

An OAuth-compatible `NSURLRequest` object that allows an app to act on behalf of the user, while keeping the user’s password private. The `NSURLRequest` is signed as OAuth1 by default, or OAuth2 by adding the appropriate token based on the user’s account.

<a id="Discussion"></a>

## Discussion

Use this method to modify your request before sending. By setting the account correctly, this method will automatically add any necessary tokens.

## See Also

### Getting the Request Details

- [requestMethod](requestmethod.md): The method to use for this request.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [URL](url.md): The destination URL for this request.
- [parameters](parameters.md): The parameters for this request.
