> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/replacetextstorage(_:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/replacetextstorage(_:))

# replaceTextStorage(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Replaces the layout manager’s current text storage object with the specified object.

## Declaration

```swift
func replaceTextStorage(_ newTextStorage: NSTextStorage)
```

## Parameters

- `newTextStorage`: The text storage object to set.

<a id="Discussion"></a>

## Discussion

Use this method to update the text storage uniformly for a group of related layout manager objects. Unlike changing the value in the textStorage property, this method replaces the text storage for all [NSLayoutManager](../nslayoutmanager.md) objects that share the current layout manager’s [NSTextStorage](../nstextstorage.md) object.

## See Also

### Accessing the text storage

- [textStorage](textstorage.md): The text storage object that contains the content to lay out.

# replaceTextStorage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Replaces the layout manager’s current text storage object with the specified object.

## Declaration

```objectivec
- (void) replaceTextStorage:(NSTextStorage *) newTextStorage;
```

## Parameters

- `newTextStorage`: The text storage object to set.

<a id="Discussion"></a>

## Discussion

Use this method to update the text storage uniformly for a group of related layout manager objects. Unlike changing the value in the textStorage property, this method replaces the text storage for all [NSLayoutManager](../nslayoutmanager.md) objects that share the current layout manager’s [NSTextStorage](../nstextstorage.md) object.

## See Also

### Accessing the text storage

- [textStorage](textstorage.md): The text storage object that contains the content to lay out.
