> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/shared](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared `NSDocumentController` instance.

## Declaration

```swift
class var shared: NSDocumentController { get }
```

<a id="return-value"></a>

## Return Value

The shared `NSDocumentController` instance.

<a id="Discussion"></a>

## Discussion

If an `NSDocumentController` instance doesn’t exist yet, it is created.

Initialization reads in the document types from the `CFBundleDocumentTypes` property list (in `Info.plist`), registers the instance for [willPowerOffNotification](../nsworkspace/willpoweroffnotification.md)s, and turns on the flag indicating that document user interfaces should be visible. You should always obtain your application’s `NSDocumentController` using this method.

## See Also

### Related Documentation

- [Developing a Document-Based App](../developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.

# sharedDocumentController (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared `NSDocumentController` instance.

## Declaration

```objectivec
@property (class, strong, readonly) NSDocumentController * sharedDocumentController;
```

<a id="return-value"></a>

## Return Value

The shared `NSDocumentController` instance.

<a id="Discussion"></a>

## Discussion

If an `NSDocumentController` instance doesn’t exist yet, it is created.

Initialization reads in the document types from the `CFBundleDocumentTypes` property list (in `Info.plist`), registers the instance for [NSWorkspaceWillPowerOffNotification](../nsworkspace/willpoweroffnotification.md)s, and turns on the flag indicating that document user interfaces should be visible. You should always obtain your application’s `NSDocumentController` using this method.

## See Also

### Related Documentation

- [setShouldCreateUI:](setshouldcreateui_.md): Deprecated. Sets whether the window controllers of a document should be created when the document is created.
- [Developing a Document-Based App](../developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.
