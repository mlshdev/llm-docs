> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberdelegate](https://developer.apple.com/documentation/appkit/nsscrubberdelegate)

# NSScrubberDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a scrubber delegate implements to respond to user interactions.

## Declaration

```swift
protocol NSScrubberDelegate : NSObjectProtocol
```

## Topics

### Handling item selection and highlighting

- [scrubber(\_:didSelectItemAt:)](nsscrubberdelegate/scrubber%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index was selected.
- [scrubber(\_:didHighlightItemAt:)](nsscrubberdelegate/scrubber%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index was highlighted.

### Handling scrubber scrolling

- [scrubber(\_:didChangeVisibleRange:)](nsscrubberdelegate/scrubber%28__didchangevisiblerange_%29.md): Tells the delegate that the range of items currently visible in the scrubber has changed.

### Tracking user interaction

- [didBeginInteracting(with:)](nsscrubberdelegate/didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didFinishInteracting(with:)](nsscrubberdelegate/didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.
- [didCancelInteracting(with:)](nsscrubberdelegate/didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md)

## See Also

### Scrubbers

- [NSScrubber](nsscrubber.md): A customizable item picker control for the Touch Bar.
- [NSScrubberDataSource](nsscrubberdatasource.md): A set of methods that a scrubber data source object implements to provide items to the scrubber from an associated data collection in your app.

# NSScrubberDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a scrubber delegate implements to respond to user interactions.

## Declaration

```objectivec
@protocol NSScrubberDelegate <NSObject>
```

## Topics

### Handling item selection and highlighting

- [scrubber:didSelectItemAtIndex:](nsscrubberdelegate/scrubber%28__didselectitemat_%29.md): Tells the delegate that the item at the specified index was selected.
- [scrubber:didHighlightItemAtIndex:](nsscrubberdelegate/scrubber%28__didhighlightitemat_%29.md): Tells the delegate that the item at the specified index was highlighted.

### Handling scrubber scrolling

- [scrubber:didChangeVisibleRange:](nsscrubberdelegate/scrubber%28__didchangevisiblerange_%29.md): Tells the delegate that the range of items currently visible in the scrubber has changed.

### Tracking user interaction

- [didBeginInteractingWithScrubber:](nsscrubberdelegate/didbegininteracting%28with_%29.md): Tells the delegate that the user is panning or scrolling the scrubber.
- [didFinishInteractingWithScrubber:](nsscrubberdelegate/didfinishinteracting%28with_%29.md): Tells the delegate that a pan or scroll interaction with the scrubber has ended.
- [didCancelInteractingWithScrubber:](nsscrubberdelegate/didcancelinteracting%28with_%29.md): Tells the delegate that a user interaction with the scrubber has been canceled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md)

## See Also

### Scrubbers

- [NSScrubber](nsscrubber.md): A customizable item picker control for the Touch Bar.
- [NSScrubberDataSource](nsscrubberdatasource.md): A set of methods that a scrubber data source object implements to provide items to the scrubber from an associated data collection in your app.
