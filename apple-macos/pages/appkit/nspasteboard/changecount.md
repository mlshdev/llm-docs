> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/changecount](https://developer.apple.com/documentation/appkit/nspasteboard/changecount)

# changeCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s change count.

## Declaration

```swift
var changeCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The change count starts at zero when a client creates the receiver and becomes the first owner. The change count subsequently increments each time the pasteboard ownership changes.

The change count is also returned from [clearContents()](clearcontents%28%29.md) and [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md). You can therefore record the value of `changeCount` at the time that you take ownership of the pasteboard and compare it with a later value to determine whether you still have ownership.

## See Also

### Related Documentation

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

### Getting information about a pasteboard

- [name](name-swift.property.md): The receiver’s name.

# changeCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s change count.

## Declaration

```objectivec
@property (readonly) NSInteger changeCount;
```

<a id="Discussion"></a>

## Discussion

The change count starts at zero when a client creates the receiver and becomes the first owner. The change count subsequently increments each time the pasteboard ownership changes.

The change count is also returned from [clearContents](clearcontents%28%29.md) and [declareTypes:owner:](declaretypes%28__owner_%29.md). You can therefore record the value of `changeCount` at the time that you take ownership of the pasteboard and compare it with a later value to determine whether you still have ownership.

## See Also

### Related Documentation

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [declareTypes:owner:](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.

### Getting information about a pasteboard

- [name](name-swift.property.md): The receiver’s name.
