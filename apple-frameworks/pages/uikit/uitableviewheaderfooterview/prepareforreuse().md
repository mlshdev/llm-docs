> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/prepareforreuse()](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/prepareforreuse())

# prepareForReuse() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Prepares a reusable header or footer view for reuse by the table.

## Declaration

```swift
func prepareForReuse()
```

<a id="Discussion"></a>

## Discussion

If your header or footer view is reusable — that is, it has a reuse identifier — the table view calls this method just before returning the view from its [dequeueReusableHeaderFooterView(withIdentifier:)](../uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method. Subclasses can override this method and use it to reset attributes of the view to their default values. For performance reasons, you should only reset attributes that aren’t related to content.

If the view doesn’t have a reuse identifier, this method is never called.

## See Also

### Managing view reuse

- [reuseIdentifier](reuseidentifier.md): A string used to identify a reusable header or footer.

# prepareForReuse (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Prepares a reusable header or footer view for reuse by the table.

## Declaration

```objectivec
- (void) prepareForReuse;
```

<a id="Discussion"></a>

## Discussion

If your header or footer view is reusable — that is, it has a reuse identifier — the table view calls this method just before returning the view from its [dequeueReusableHeaderFooterViewWithIdentifier:](../uitableview/dequeuereusableheaderfooterview%28withidentifier_%29.md) method. Subclasses can override this method and use it to reset attributes of the view to their default values. For performance reasons, you should only reset attributes that aren’t related to content.

If the view doesn’t have a reuse identifier, this method is never called.

## See Also

### Managing view reuse

- [reuseIdentifier](reuseidentifier.md): A string used to identify a reusable header or footer.
