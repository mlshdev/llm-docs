> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/init(frompasteboard:)](https://developer.apple.com/documentation/foundation/nsurl/init(frompasteboard:))

# init(fromPasteboard:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Reads an NSURL object off of the specified pasteboard.

## Declaration

```swift
init?(fromPasteboard pasteBoard: NSPasteboard)
```

```swift
init?(from pasteBoard: NSPasteboard)
```

## Parameters

- `pasteBoard`: The target pasteboard.

<a id="return-value"></a>

## Return Value

A `NSURL` object, or `nil` if the pasteboard does not contain `NSURLPboardType` data.

## See Also

### Working with Pasteboards

- [write(to:)](write%28to_%29.md): Writes the URL to the specified pasteboard.

# URLFromPasteboard: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+

Reads an NSURL object off of the specified pasteboard.

## Declaration

```objectivec
+ (NSURL *) URLFromPasteboard:(NSPasteboard *) pasteBoard;
```

## Parameters

- `pasteBoard`: The target pasteboard.

<a id="return-value"></a>

## Return Value

A `NSURL` object, or `nil` if the pasteboard does not contain `NSURLPboardType` data.

## See Also

### Working with Pasteboards

- [writeToPasteboard:](write%28to_%29.md): Writes the URL to the specified pasteboard.
