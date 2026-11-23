> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingbutton/init(handler:)

# init(handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button and sets its action to the provided handler.

## Declaration

```swift
init(handler: ((CPNowPlayingButton) -> Void)? = nil)
```

## Parameters

- `handler`: The handler to run when someone interacts with the button. This closure takes the button as a parameter and returns no value.

<a id="return-value"></a>

## Return Value

An initialized button.

<a id="discussion"></a>

## Discussion

When you instantiate a concrete subclass of [CPNowPlayingButton](../cpnowplayingbutton.md), use this initializer to specify the code to run when someone interacts with the button.

# initWithHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button and sets its action to the provided handler.

## Declaration

```objectivec
- (instancetype) initWithHandler:(void (^)(CPNowPlayingButton *)) handler;
```

## Parameters

- `handler`: The handler to run when someone interacts with the button. This closure takes the button as a parameter and returns no value.

<a id="return-value"></a>

## Return Value

An initialized button.

<a id="discussion"></a>

## Discussion

When you instantiate a concrete subclass of [CPNowPlayingButton](../cpnowplayingbutton.md), use this initializer to specify the code to run when someone interacts with the button.
