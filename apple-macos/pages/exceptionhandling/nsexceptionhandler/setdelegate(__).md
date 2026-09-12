> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/exceptionhandling/nsexceptionhandler/setdelegate(_:)](https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/setdelegate(_:))

# setDelegate(\_:) (Swift)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the delegate of the `NSExceptionHandler` object.

## Declaration

```swift
func setDelegate(_ anObject: Any!)
```

## Parameters

- `anObject`: The object to receive the delegation messages described in [NSExceptionHandlerDelegate](../nsexceptionhandlerdelegate.md)

## See Also

### Getting and setting the delegate

- [delegate()](delegate%28%29.md): Returns the delegate of the `NSExceptionHandler` object.

# setDelegate: (Objective-C)

**Framework:** Exception Handling  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the delegate of the `NSExceptionHandler` object.

## Declaration

```objectivec
- (void) setDelegate:(id) anObject;
```

## Parameters

- `anObject`: The object to receive the delegation messages described in [NSExceptionHandlerDelegate](../nsexceptionhandlerdelegate.md)

## See Also

### Getting and setting the delegate

- [delegate](delegate%28%29.md): Returns the delegate of the `NSExceptionHandler` object.
