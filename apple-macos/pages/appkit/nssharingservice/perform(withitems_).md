> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/perform(withitems:)](https://developer.apple.com/documentation/appkit/nssharingservice/perform(withitems:))

# perform(withItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Manually performs the service on the provided items.

## Declaration

```swift
func perform(withItems items: [Any])
```

## Parameters

- `items`: The items to share.

<a id="Discussion"></a>

## Discussion

In most cases this will display a sharing window.

## See Also

### Related Documentation

- [canPerform(withItems:)](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

# performWithItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Manually performs the service on the provided items.

## Declaration

```objectivec
- (void) performWithItems:(NSArray *) items;
```

## Parameters

- `items`: The items to share.

<a id="Discussion"></a>

## Discussion

In most cases this will display a sharing window.

## See Also

### Related Documentation

- [canPerformWithItems:](canperform%28withitems_%29.md): Returns whether the service can share all the specified items.
