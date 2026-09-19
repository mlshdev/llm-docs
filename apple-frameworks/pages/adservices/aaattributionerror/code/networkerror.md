> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/adservices/aaattributionerror/code/networkerror

# AAAttributionError.Code.networkError (Swift)

**Framework:** AdServices  
**Kind:** Case  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The server is unable to provide a token because the internet isn’t available.

## Declaration

```swift
case networkError
```

<a id="discussion"></a>

## Discussion

To receive an attribution token, you must have unimpeded internet access. Make sure you’re not using a simulator when generating a token.

## See Also

### Determining the cause of an error

- [AAAttributionError.Code.internalError](internalerror.md): The server is unable to provide a token because of an internal error.
- [AAAttributionError.Code.platformNotSupported](platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.

# AAAttributionErrorCodeNetworkError (Objective-C)

**Framework:** AdServices  
**Kind:** Enumeration Case  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The server is unable to provide a token because the internet isn’t available.

## Declaration

```objectivec
AAAttributionErrorCodeNetworkError
```

<a id="discussion"></a>

## Discussion

To receive an attribution token, you must have unimpeded internet access. Make sure you’re not using a simulator when generating a token.

## See Also

### Determining the cause of an error

- [AAAttributionErrorCodeInternalError](internalerror.md): The server is unable to provide a token because of an internal error.
- [AAAttributionErrorCodePlatformNotSupported](platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.
