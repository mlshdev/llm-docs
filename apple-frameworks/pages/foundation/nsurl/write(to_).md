> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/write(to:)](https://developer.apple.com/documentation/foundation/nsurl/write(to:))

# write(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Writes the URL to the specified pasteboard.

## Declaration

```swift
func write(to pasteBoard: NSPasteboard)
```

## Parameters

- `pasteBoard`: The target pasteboard.

<a id="Discussion"></a>

## Discussion

You must declare an `NSURLPboardType` data type for the pasteboard before invoking this method. Otherwise, the method returns without doing anything.

## See Also

### Related Documentation

- [declareTypes(\_:owner:)](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes%28_:owner:%29): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

### Working with Pasteboards

- [init(fromPasteboard:)](init%28frompasteboard_%29.md): Reads an NSURL object off of the specified pasteboard.

# writeToPasteboard: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Writes the URL to the specified pasteboard.

## Declaration

```objectivec
- (void) writeToPasteboard:(NSPasteboard *) pasteBoard;
```

## Parameters

- `pasteBoard`: The target pasteboard.

<a id="Discussion"></a>

## Discussion

You must declare an `NSURLPboardType` data type for the pasteboard before invoking this method. Otherwise, the method returns without doing anything.

## See Also

### Related Documentation

- [declareTypes:owner:](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes%28_:owner:%29): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

### Working with Pasteboards

- [URLFromPasteboard:](init%28frompasteboard_%29.md): Reads an NSURL object off of the specified pasteboard.
