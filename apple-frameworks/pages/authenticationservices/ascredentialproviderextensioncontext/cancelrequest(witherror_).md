> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialproviderextensioncontext/cancelrequest(witherror:)](https://developer.apple.com/documentation/authenticationservices/ascredentialproviderextensioncontext/cancelrequest(witherror:))

# cancelRequest(withError:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Cancels the request.

## Declaration

```swift
func cancelRequest(withError error: any Error)
```

## Parameters

- `error`: Use an error domain of [ASExtensionErrorDomain](../asextensionerrordomain.md) and a code of type [ASExtensionError.Code](../asextensionerror/code.md).

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

Call this method if the user cancels the action or if a failure occurs. The system dismisses your extension’s view controller automatically.

# cancelRequestWithError: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Cancels the request.

## Declaration

```objectivec
- (void) cancelRequestWithError:(NSError *) error;
```

## Parameters

- `error`: Use an error domain of [ASExtensionErrorDomain](../asextensionerrordomain.md) and a code of type [ASExtensionErrorCode](../asextensionerror/code.md).

## Mentioned In

- [Providing one-time passcodes to AutoFill](../providing-one-time-passcodes-to-autofill.md)

<a id="Discussion"></a>

## Discussion

Call this method if the user cancels the action or if a failure occurs. The system dismisses your extension’s view controller automatically.
