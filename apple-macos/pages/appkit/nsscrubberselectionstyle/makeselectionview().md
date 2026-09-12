> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberselectionstyle/makeselectionview()](https://developer.apple.com/documentation/appkit/nsscrubberselectionstyle/makeselectionview())

# makeSelectionView() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Provides an opportunity to create a customized scrubber selection style.

## Declaration

```swift
func makeSelectionView() -> NSScrubberSelectionView?
```

<a id="return-value"></a>

## Return Value

A correctly configured scrubber selection view that represents the appearance of your custom selection style.

<a id="Discussion"></a>

## Discussion

In an [NSScrubberSelectionStyle](../nsscrubberselectionstyle.md) subclass that you create, override this method to create a custom selection style.

## See Also

### Creating a selection style

- [init()](init%28%29.md): Initializes a new scrubber selection style.
- [init(coder:)](init%28coder_%29.md): Initializes a scrubber selection style when included from a nib or Storyboard.

# makeSelectionView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Provides an opportunity to create a customized scrubber selection style.

## Declaration

```objectivec
- (NSScrubberSelectionView *) makeSelectionView;
```

<a id="return-value"></a>

## Return Value

A correctly configured scrubber selection view that represents the appearance of your custom selection style.

<a id="Discussion"></a>

## Discussion

In an [NSScrubberSelectionStyle](../nsscrubberselectionstyle.md) subclass that you create, override this method to create a custom selection style.

## See Also

### Creating a selection style

- [init](init%28%29.md): Initializes a new scrubber selection style.
- [initWithCoder:](init%28coder_%29.md): Initializes a scrubber selection style when included from a nib or Storyboard.
