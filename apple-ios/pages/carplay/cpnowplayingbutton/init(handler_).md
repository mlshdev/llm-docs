> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingbutton/init(handler:)](https://developer.apple.com/documentation/carplay/cpnowplayingbutton/init(handler:))

# init(handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Now Playing button that invokes a handler.

## Declaration

```swift
init(handler: ((CPNowPlayingButton) -> Void)? = nil)
```

## Parameters

- `handler`: A closure that the button invokes when the user taps it.

# initWithHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Now Playing button that invokes a handler.

## Declaration

```objectivec
- (instancetype) initWithHandler:(void (^)(CPNowPlayingButton *)) handler;
```

## Parameters

- `handler`: A closure that the button invokes when the user taps it.
