> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionrequest/delegate](https://developer.apple.com/documentation/systemextensions/ossystemextensionrequest/delegate)

# delegate (Swift)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A delegate to receive updates about the progress of a request.

## Declaration

```swift
weak var delegate: (any OSSystemExtensionRequestDelegate)? { get set }
```

## See Also

### Working with a Delegate

- [OSSystemExtensionRequestDelegate](../ossystemextensionrequestdelegate.md): A type that receives updates about the progress of a request.

# delegate (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A delegate to receive updates about the progress of a request.

## Declaration

```objectivec
@property (nonatomic, weak) id<OSSystemExtensionRequestDelegate> delegate;
```

## See Also

### Working with a Delegate

- [OSSystemExtensionRequestDelegate](../ossystemextensionrequestdelegate.md): A type that receives updates about the progress of a request.
