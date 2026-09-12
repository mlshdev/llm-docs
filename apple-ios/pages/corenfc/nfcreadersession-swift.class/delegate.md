> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersession-swift.class/delegate](https://developer.apple.com/documentation/corenfc/nfcreadersession-swift.class/delegate)

# delegate (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The delegate of the reader session.

## Declaration

```swift
weak var delegate: AnyObject? { get }
```

## See Also

### Working with a Session

- [sessionQueue](sessionqueue.md): The queue on which the reader session delegate callbacks and completion block handlers are dispatched.

# delegate (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The delegate of the reader session.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id delegate;
```

## See Also

### Working with a Session

- [sessionQueue](sessionqueue.md): The queue on which the reader session delegate callbacks and completion block handlers are dispatched.
