> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersession-swift.class/sessionqueue](https://developer.apple.com/documentation/corenfc/nfcreadersession-swift.class/sessionqueue)

# sessionQueue (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The queue on which the reader session delegate callbacks and completion block handlers are dispatched.

## Declaration

```swift
var sessionQueue: dispatch_queue_t { get }
```

## See Also

### Working with a Session

- [delegate](delegate.md): The delegate of the reader session.

# sessionQueue (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The queue on which the reader session delegate callbacks and completion block handlers are dispatched.

## Declaration

```objectivec
@property (nonatomic, readonly) dispatch_queue_t sessionQueue;
```

## See Also

### Working with a Session

- [delegate](delegate.md): The delegate of the reader session.
