> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewwithtag(_:)](https://developer.apple.com/documentation/appkit/nsview/viewwithtag(_:))

# viewWithTag(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.

## Declaration

```swift
func viewWithTag(_ tag: Int) -> NSView?
```

## Parameters

- `tag`: An integer identifier associated with a view object.

## See Also

### Identifying Views by Tag

- [tag](tag.md): The view’s tag, which is an integer that you use to identify the view within your app.

# viewWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.

## Declaration

```objectivec
- (NSView *) viewWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: An integer identifier associated with a view object.

## See Also

### Identifying Views by Tag

- [tag](tag.md): The view’s tag, which is an integer that you use to identify the view within your app.
