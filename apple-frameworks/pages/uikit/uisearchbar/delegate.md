> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchbar/delegate

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The search bar’s delegate object.

## Declaration

```swift
weak var delegate: (any UISearchBarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the [UISearchBarDelegate](../uisearchbardelegate.md) protocol. Set this property to further modify the behavior. The default value is `nil`.

## See Also

### Handling search bar interactions

- [UISearchBarDelegate](../uisearchbardelegate.md): A collection of optional methods that you implement to make a search bar control functional.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The search bar’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UISearchBarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the [UISearchBarDelegate](../uisearchbardelegate.md) protocol. Set this property to further modify the behavior. The default value is `nil`.

## See Also

### Handling search bar interactions

- [UISearchBarDelegate](../uisearchbardelegate.md): A collection of optional methods that you implement to make a search bar control functional.
