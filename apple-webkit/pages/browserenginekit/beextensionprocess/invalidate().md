> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beextensionprocess/invalidate()](https://developer.apple.com/documentation/browserenginekit/beextensionprocess/invalidate())

# invalidate() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

Stops the extension process.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

Call this method to signal to the system your app no longer needs the extension process. If this is the last connection from the system to the extension, the system ends the extension process.

## See Also

- [makeLibXPCConnectionError()](makelibxpcconnectionerror%28%29.md): Creates a new libXPC connection to the extension process.

# invalidate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

Stops the extension process.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="discussion"></a>

## Discussion

Call this method to signal to the system your app no longer needs the extension process. If this is the last connection from the system to the extension, the system ends the extension process.

## See Also

- [makeLibXPCConnectionError:](makelibxpcconnectionerror%28%29.md): Creates a new libXPC connection to the extension process.
