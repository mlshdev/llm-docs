> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappconfigurationdecodingerror/code](https://developer.apple.com/documentation/managedapp/managedappconfigurationdecodingerror/code)

# code

**Framework:** ManagedApp  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

An app-specific error code that identifies a configuration issue.

## Declaration

```swift
var code: ManagedAppConfigurationDecodingErrorCode { get set }
```

## Mentioned In

- [Specifying and decoding a configuration](../specifying-and-decoding-a-configuration.md)

<a id="discussion"></a>

## Discussion

The system reserves values equal to or greater than `ManagedAppConfigurationDecodingErrorCodes.firstReserved`.
