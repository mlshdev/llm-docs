> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/nextresponder](https://developer.apple.com/documentation/appkit/nsresponder/nextresponder)

# nextResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The next responder after this one, or `nil` if it has none.

## Declaration

```swift
unowned(unsafe) var nextResponder: NSResponder? { get set }
```

<a id="Discussion"></a>

## Discussion

The next responder must be an object that inherits, directly or indirectly, from `NSResponder`.

## See Also

### Related Documentation

- [noResponder(for:)](noresponder%28for_%29.md): Handles the case where an event or action message falls off the end of the responder chain.

# nextResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The next responder after this one, or `nil` if it has none.

## Declaration

```objectivec
@property (unsafe_unretained, nullable) NSResponder * nextResponder;
```

<a id="Discussion"></a>

## Discussion

The next responder must be an object that inherits, directly or indirectly, from `NSResponder`.

## See Also

### Related Documentation

- [noResponderFor:](noresponder%28for_%29.md): Handles the case where an event or action message falls off the end of the responder chain.
