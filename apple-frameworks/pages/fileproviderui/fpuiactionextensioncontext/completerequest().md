> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensioncontext/completerequest()](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensioncontext/completerequest())

# completeRequest() (Swift)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Marks the action as complete.

## Declaration

```swift
func completeRequest()
```

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Call this method when the action completes successfully.

## See Also

### Completing the Action

- [cancelRequest(withError:)](cancelrequest%28witherror_%29.md): Cancels the action and returns the provided error.

# completeRequest (Objective-C)

**Framework:** File Provider UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Marks the action as complete.

## Declaration

```objectivec
- (void) completeRequest;
```

## Mentioned In

- [Adding Actions to the Context Menu](../adding-actions-to-the-context-menu.md)

<a id="Discussion"></a>

## Discussion

Call this method when the action completes successfully.

## See Also

### Completing the Action

- [cancelRequestWithError:](cancelrequest%28witherror_%29.md): Cancels the action and returns the provided error.
