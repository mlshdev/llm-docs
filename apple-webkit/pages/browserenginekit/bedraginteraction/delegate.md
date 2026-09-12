> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedraginteraction/delegate](https://developer.apple.com/documentation/browserenginekit/bedraginteraction/delegate)

# delegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A delegate for a drag interaction.

## Declaration

```swift
weak var delegate: (any BEDragInteractionDelegate)? { get }
```

<a id="discussion"></a>

## Discussion

The delegate conforms to [BEDragInteractionDelegate](../bedraginteractiondelegate.md).

## See Also

### Handling drag gestures

- [BEDragInteractionDelegate](../bedraginteractiondelegate.md): A protocol for a drag interaction delegate.

# delegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A delegate for a drag interaction.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<BEDragInteractionDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The delegate conforms to [BEDragInteractionDelegate](../bedraginteractiondelegate.md).

## See Also

### Handling drag gestures

- [BEDragInteractionDelegate](../bedraginteractiondelegate.md): A protocol for a drag interaction delegate.
