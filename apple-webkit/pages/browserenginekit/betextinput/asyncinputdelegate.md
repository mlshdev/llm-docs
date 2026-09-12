> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/asyncinputdelegate](https://developer.apple.com/documentation/browserenginekit/betextinput/asyncinputdelegate)

# asyncInputDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate object that your text view notifies of events and changes in the text’s state.

## Declaration

```swift
weak var asyncInputDelegate: (any BETextInputDelegate)? { get set }
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# asyncInputDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A delegate object that your text view notifies of events and changes in the text’s state.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<BETextInputDelegate> asyncInputDelegate;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
