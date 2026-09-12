> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/shared](https://developer.apple.com/documentation/appkit/nsworkspace/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared workspace object.

## Declaration

```swift
class var shared: NSWorkspace { get }
```

<a id="return-value"></a>

## Return Value

The `NSWorkspace` object associated with the process.

<a id="Discussion"></a>

## Discussion

You can access this object safely from any thread in your app.

## See Also

### Related Documentation

- [Workspace Services Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Workspace/introduction.html#//apple_ref/doc/uid/10000100i)

# sharedWorkspace (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared workspace object.

## Declaration

```objectivec
@property (class, strong, readonly) NSWorkspace * sharedWorkspace;
```

<a id="return-value"></a>

## Return Value

The `NSWorkspace` object associated with the process.

<a id="Discussion"></a>

## Discussion

You can access this object safely from any thread in your app.

## See Also

### Related Documentation

- [Workspace Services Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Workspace/introduction.html#//apple_ref/doc/uid/10000100i)
