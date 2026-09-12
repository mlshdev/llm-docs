> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollview/delegate](https://developer.apple.com/documentation/browserenginekit/bescrollview/delegate)

# delegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate that responds to the scroll view’s scroll updates.

## Declaration

```swift
weak var delegate: (any BEScrollViewDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

`BEScrollView` doesn’t retain the delegate, which must conform to the [BEScrollViewDelegate](../bescrollviewdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate that responds to the scroll view’s scroll updates.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<BEScrollViewDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

`BEScrollView` doesn’t retain the delegate, which must conform to the [BEScrollViewDelegate](../bescrollviewdelegate.md) protocol.
