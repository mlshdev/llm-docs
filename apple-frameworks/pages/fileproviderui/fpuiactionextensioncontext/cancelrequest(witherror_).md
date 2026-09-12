> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensioncontext/cancelrequest(witherror:)](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensioncontext/cancelrequest(witherror:))

# cancelRequest(withError:) (Swift)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Cancels the action and returns the provided error.

## Declaration

```swift
func cancelRequest(withError error: any Error)
```

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Call this method if the action fails. Set the error’s domain to [FPUIErrorDomain](../fpuierrordomain.md). Set the error code to a [FPUIExtensionErrorCode](../fpuiextensionerrorcode.md) value.

## See Also

### Completing the Action

- [completeRequest()](completerequest%28%29.md): Marks the action as complete.

# cancelRequestWithError: (Objective-C)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Cancels the action and returns the provided error.

## Declaration

```objectivec
- (void) cancelRequestWithError:(NSError *) error;
```

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Call this method if the action fails. Set the error’s domain to [FPUIErrorDomain](../fpuierrordomain.md). Set the error code to a [FPUIExtensionErrorCode](../fpuiextensionerrorcode.md) value.

## See Also

### Completing the Action

- [completeRequest](completerequest%28%29.md): Marks the action as complete.
