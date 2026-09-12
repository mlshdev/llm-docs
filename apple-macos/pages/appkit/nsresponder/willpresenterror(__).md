> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/willpresenterror(_:)](https://developer.apple.com/documentation/appkit/nsresponder/willpresenterror(_:))

# willPresentError(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

## Declaration

```swift
func willPresentError(_ error: any Error) -> any Error
```

## Parameters

- `error`: The error object to customize.

<a id="return-value"></a>

## Return Value

The customized error object; if you decide not to customize the error presentation, return by sending this message to `super` (that is, `return [super willPresentError:error]`).

<a id="Discussion"></a>

## Discussion

When overriding this method, you can examine `error` and, if its localized description or recovery information is unhelpfully generic, return an error object with more specific localized text. If you do this, always use the domain and error code of the [NSError](https://developer.apple.com/documentation/foundation/nserror) object to distinguish between errors whose presentation you want to customize and those you don’t. Don’t make decisions based on the localized description, recovery suggestion, or recovery options because parsing localized text is problematic.

The default implementation of this method returns `error` unchanged.

## See Also

### Presenting and Customizing Error Information

- [presentError(\_:)](presenterror%28__%29.md): Presents an error alert to the user as an application-modal dialog.
- [presentError(\_:modalFor:delegate:didPresent:contextInfo:)](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.

# willPresentError: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a custom version of the supplied error object that’s more suitable for presentation in alert sheets and dialogs.

## Declaration

```objectivec
- (NSError *) willPresentError:(NSError *) error;
```

## Parameters

- `error`: The error object to customize.

<a id="return-value"></a>

## Return Value

The customized error object; if you decide not to customize the error presentation, return by sending this message to `super` (that is, `return [super willPresentError:error]`).

<a id="Discussion"></a>

## Discussion

When overriding this method, you can examine `error` and, if its localized description or recovery information is unhelpfully generic, return an error object with more specific localized text. If you do this, always use the domain and error code of the [NSError](https://developer.apple.com/documentation/foundation/nserror) object to distinguish between errors whose presentation you want to customize and those you don’t. Don’t make decisions based on the localized description, recovery suggestion, or recovery options because parsing localized text is problematic.

The default implementation of this method returns `error` unchanged.

## See Also

### Presenting and Customizing Error Information

- [presentError:](presenterror%28__%29.md): Presents an error alert to the user as an application-modal dialog.
- [presentError:modalForWindow:delegate:didPresentSelector:contextInfo:](presenterror%28__modalfor_delegate_didpresent_contextinfo_%29.md): Presents an error alert to the user as a document-modal sheet attached to document window.
