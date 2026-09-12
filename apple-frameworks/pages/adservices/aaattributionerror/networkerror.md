> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/adservices/aaattributionerror/networkerror](https://developer.apple.com/documentation/adservices/aaattributionerror/networkerror)

# networkError

**Framework:** AdServices  
**Kind:** Type Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The server is unable to provide a token because the internet isn’t available.

## Declaration

```swift
static var networkError: AAAttributionError.Code { get }
```

<a id="discussion"></a>

## Discussion

To receive an attribution token, you must have unimpeded internet access. Make sure you’re not using a simulator when generating a token.

## See Also

### Error codes

- [internalError](internalerror.md): The server is unable to provide a token because of an internal error.
- [platformNotSupported](platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.
- [AAAttributionError.Code](code.md): The error code that the parent class issues.
