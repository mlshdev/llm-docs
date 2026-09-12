> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/beginediting()](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/beginediting())

# beginEditing() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Begins the buffering of changes to the string’s characters and attributes.

## Declaration

```swift
func beginEditing()
```

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to buffer or optimize a series of changes to the string’s characters or attributes. The string continues to buffer text until you call [endEditing()](endediting%28%29.md), at which time it consolidates the changes and notifies observers.

You can nest pairs of [beginEditing()](beginediting%28%29.md) and [endEditing()](endediting%28%29.md) messages.

## See Also

### Grouping Changes

- [endEditing()](endediting%28%29.md): Ends the buffering of changes to the string’s characters and attributes.

# beginEditing (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Begins the buffering of changes to the string’s characters and attributes.

## Declaration

```objectivec
- (void) beginEditing;
```

<a id="Discussion"></a>

## Discussion

Override this method in a subclass to buffer or optimize a series of changes to the string’s characters or attributes. The string continues to buffer text until you call [endEditing](endediting%28%29.md), at which time it consolidates the changes and notifies observers.

You can nest pairs of [beginEditing](beginediting%28%29.md) and [endEditing](endediting%28%29.md) messages.

## See Also

### Grouping Changes

- [endEditing](endediting%28%29.md): Ends the buffering of changes to the string’s characters and attributes.
