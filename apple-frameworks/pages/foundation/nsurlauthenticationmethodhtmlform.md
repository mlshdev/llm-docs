> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlauthenticationmethodhtmlform](https://developer.apple.com/documentation/foundation/nsurlauthenticationmethodhtmlform)

# NSURLAuthenticationMethodHTMLForm (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use HTML form authentication for this protection space.

## Declaration

```swift
let NSURLAuthenticationMethodHTMLForm: String
```

<a id="Discussion"></a>

## Discussion

The URL loading system never issues authentication challenges based on this authentication method. However, if your app authenticates by submitting a web form (or in some other protocol-neutral way), you can specify this protection space when you persist or look up credentials using the [URLCredentialStorage](urlcredentialstorage.md) class.

## See Also

### Task-specific authentication challenges

- [NSURLAuthenticationMethodDefault](nsurlauthenticationmethoddefault.md): Use the default authentication method for a protocol.
- [NSURLAuthenticationMethodHTTPBasic](nsurlauthenticationmethodhttpbasic.md): Use HTTP basic authentication for this protection space.
- [NSURLAuthenticationMethodHTTPDigest](nsurlauthenticationmethodhttpdigest.md): Use HTTP digest authentication for this protection space.

# NSURLAuthenticationMethodHTMLForm (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use HTML form authentication for this protection space.

## Declaration

```objectivec
extern NSString * const NSURLAuthenticationMethodHTMLForm;
```

<a id="Discussion"></a>

## Discussion

The URL loading system never issues authentication challenges based on this authentication method. However, if your app authenticates by submitting a web form (or in some other protocol-neutral way), you can specify this protection space when you persist or look up credentials using the [NSURLCredentialStorage](urlcredentialstorage.md) class.

## See Also

### Task-specific authentication challenges

- [NSURLAuthenticationMethodDefault](nsurlauthenticationmethoddefault.md): Use the default authentication method for a protocol.
- [NSURLAuthenticationMethodHTTPBasic](nsurlauthenticationmethodhttpbasic.md): Use HTTP basic authentication for this protection space.
- [NSURLAuthenticationMethodHTTPDigest](nsurlauthenticationmethodhttpdigest.md): Use HTTP digest authentication for this protection space.
