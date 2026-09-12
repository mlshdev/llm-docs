> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenauthoperation/finish()](https://developer.apple.com/documentation/cryptotokenkit/tktokenauthoperation/finish())

# finish() (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Finishes the authentication operation.

## Declaration

```swift
func finish() throws
```

# finishWithError: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Finishes the authentication operation.

## Declaration

```objectivec
- (BOOL) finishWithError:(NSError **) error;
```

## Parameters

- `error`: On return, if an error occurred, contains an object with details of the error.

  The `NSError` object is created in the [TKErrorDomain](../tkerrordomain.md) domain with a code in the [TKErrorCode](../tkerror/code.md) enumeration.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the authentication operation finished successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).
