> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/showcontexthelp(_:)](https://developer.apple.com/documentation/appkit/nsresponder/showcontexthelp(_:))

# showContextHelp(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to invoke the help system, displaying information relevant to the receiver and its current state.

## Declaration

```swift
func showContextHelp(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

## See Also

### Related Documentation

- [helpRequested(\_:)](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.

# showContextHelp: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to invoke the help system, displaying information relevant to the receiver and its current state.

## Declaration

```objectivec
- (void) showContextHelp:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

## See Also

### Related Documentation

- [helpRequested:](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
