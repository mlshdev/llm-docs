> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/writeabilityhandler](https://developer.apple.com/documentation/foundation/filehandle/writeabilityhandler)

# writeabilityHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to use for writing the contents of the file handle asynchronously.

## Declaration

```swift
var writeabilityHandler: (@Sendable (FileHandle) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assigning a valid [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to this property creates a dispatch source for writing the contents of the file or socket. Your block is submitted to the file handle’s dispatch queue when there is room available to write more data. When writing a file, your handler block is typically executed repeatedly until the entire contents of the file have been written. When writing data to a socket, your handler block is executed whenever the socket is ready to accept more data.

The block you provide must accept a single parameter that is the current file handle. The return type of your block should be `void`.

To stop writing data to the file or socket, set the value of this property to `nil`. Doing so cancels the dispatch source and cleans up the file handle’s structures appropriately.

## See Also

### Monitoring for readability and writability

- [readabilityHandler](readabilityhandler.md): The block to use for reading the contents of the file handle asynchronously.

# writeabilityHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to use for writing the contents of the file handle asynchronously.

## Declaration

```objectivec
@property (copy, nullable) void (^writeabilityHandler)(NSFileHandle *);
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assigning a valid [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to this property creates a dispatch source for writing the contents of the file or socket. Your block is submitted to the file handle’s dispatch queue when there is room available to write more data. When writing a file, your handler block is typically executed repeatedly until the entire contents of the file have been written. When writing data to a socket, your handler block is executed whenever the socket is ready to accept more data.

The block you provide must accept a single parameter that is the current file handle. The return type of your block should be `void`.

To stop writing data to the file or socket, set the value of this property to `nil`. Doing so cancels the dispatch source and cleans up the file handle’s structures appropriately.

## See Also

### Monitoring for readability and writability

- [readabilityHandler](readabilityhandler.md): The block to use for reading the contents of the file handle asynchronously.
