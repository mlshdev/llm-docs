> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/endediting()](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/endediting())

# endEditing() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Ends the buffering of changes to the string’s characters and attributes.

## Declaration

```swift
func endEditing()
```

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to consolidate changes made since a previous call to [beginEditing()](beginediting%28%29.md). When you call this method, the string notifies observers of the changes.

The default implementation of this method does nothing. Subclasses such as [NSTextStorage](https://developer.apple.com/documentation/appkit/nstextstorage) override this method and use it to tell the layout manager to update the text layout.

## See Also

### Related Documentation

- [processEditing()](https://developer.apple.com/documentation/appkit/nstextstorage/processediting%28%29): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

### Grouping Changes

- [beginEditing()](beginediting%28%29.md): Begins the buffering of changes to the string’s characters and attributes.

# endEditing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Ends the buffering of changes to the string’s characters and attributes.

## Declaration

```objectivec
- (void) endEditing;
```

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to consolidate changes made since a previous call to [beginEditing](beginediting%28%29.md). When you call this method, the string notifies observers of the changes.

The default implementation of this method does nothing. Subclasses such as [NSTextStorage](https://developer.apple.com/documentation/appkit/nstextstorage) override this method and use it to tell the layout manager to update the text layout.

## See Also

### Related Documentation

- [processEditing](https://developer.apple.com/documentation/appkit/nstextstorage/processediting%28%29): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

### Grouping Changes

- [beginEditing](beginediting%28%29.md): Begins the buffering of changes to the string’s characters and attributes.
