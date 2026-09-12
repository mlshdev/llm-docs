> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsassertionhandler/current](https://developer.apple.com/documentation/foundation/nsassertionhandler/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSAssertionHandler` object associated with the current thread.

## Declaration

```swift
class var current: NSAssertionHandler { get }
```

<a id="return-value"></a>

## Return Value

The `NSAssertionHandler` object associated with the current thread.

<a id="Discussion"></a>

## Discussion

If no assertion handler is associated with the current thread, this method creates one and assigns it to the thread.

# currentHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `NSAssertionHandler` object associated with the current thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSAssertionHandler * currentHandler;
```

<a id="return-value"></a>

## Return Value

The `NSAssertionHandler` object associated with the current thread.

<a id="Discussion"></a>

## Discussion

If no assertion handler is associated with the current thread, this method creates one and assigns it to the thread.

## See Also

### Handling Assertion Failures

- [handleFailureInFunction:file:lineNumber:description:](handlefailureinfunction_file_linenumber_description_.md)
- [handleFailureInMethod:object:file:lineNumber:description:](handlefailureinmethod_object_file_linenumber_description_.md)
