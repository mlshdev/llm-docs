> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/checkresourceisreachableandreturnerror(_:)](https://developer.apple.com/documentation/foundation/nsurl/checkresourceisreachableandreturnerror(_:))

# checkResourceIsReachableAndReturnError(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the resource pointed to by a file URL can be reached.

## Declaration

```swift
func checkResourceIsReachableAndReturnError(_ error: NSErrorPointer) -> Bool
```

## Parameters

- `error`: The error that occurred when the resource could not be reached.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource is reachable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method synchronously checks if the file at the provided URL is reachable. Checking reachability is appropriate when making decisions that do not require other immediate operations on the resource, such as periodic maintenance of user interface state that depends on the existence of a specific document. For example, you might remove an item from a download list if the user deletes the file.

If your app must perform operations on the file, such as opening it or copying resource properties, it is more efficient to attempt the operation and handle any failure that may occur.

If this method returns [false](https://developer.apple.com/documentation/swift/false), the object pointer referenced by `error` is populated with additional information.

## See Also

### Querying an NSURL

- [isFileReferenceURL()](isfilereferenceurl%28%29.md): Returns whether the URL is a file reference URL.
- [isFileURL](isfileurl.md): A boolean value that determines whether the receiver is a file URL.

# checkResourceIsReachableAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns whether the resource pointed to by a file URL can be reached.

## Declaration

```objectivec
- (BOOL) checkResourceIsReachableAndReturnError:(NSError **) error;
```

## Parameters

- `error`: The error that occurred when the resource could not be reached.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource is reachable; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method synchronously checks if the file at the provided URL is reachable. Checking reachability is appropriate when making decisions that do not require other immediate operations on the resource, such as periodic maintenance of user interface state that depends on the existence of a specific document. For example, you might remove an item from a download list if the user deletes the file.

If your app must perform operations on the file, such as opening it or copying resource properties, it is more efficient to attempt the operation and handle any failure that may occur.

If this method returns [false](https://developer.apple.com/documentation/swift/false), the object pointer referenced by `error` is populated with additional information.

## See Also

### Querying an NSURL

- [isFileReferenceURL](isfilereferenceurl%28%29.md): Returns whether the URL is a file reference URL.
- [fileURL](isfileurl.md): A boolean value that determines whether the receiver is a file URL.
