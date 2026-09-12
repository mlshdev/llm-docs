> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/noteclientstringwillchange()](https://developer.apple.com/documentation/appkit/nstextfinder/noteclientstringwillchange())

# noteClientStringWillChange() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoke this method when the searched content will change.

## Declaration

```swift
func noteClientStringWillChange()
```

<a id="Discussion"></a>

## Discussion

When incremental search is enabled, this method must be called when it is known that the client’s string will be modified. This method must be called before the client string modification takes place.

## See Also

### Related Documentation

- [client](client.md): The object that provides the target search string, find bar location, and feedback methods.

# noteClientStringWillChange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoke this method when the searched content will change.

## Declaration

```objectivec
- (void) noteClientStringWillChange;
```

<a id="Discussion"></a>

## Discussion

When incremental search is enabled, this method must be called when it is known that the client’s string will be modified. This method must be called before the client string modification takes place.

## See Also

### Related Documentation

- [client](client.md): The object that provides the target search string, find bar location, and feedback methods.
