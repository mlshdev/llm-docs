> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmapbutton/init(handler:)](https://developer.apple.com/documentation/carplay/cpmapbutton/init(handler:))

# init(handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a new map button.

## Declaration

```swift
init(handler: ((CPMapButton) -> Void)? = nil)
```

## Parameters

- `handler`: The block invoked after the user taps the map button.

<a id="return-value"></a>

## Return Value

A newly initialized map button.

# initWithHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a new map button.

## Declaration

```objectivec
- (instancetype) initWithHandler:(void (^)(CPMapButton *mapButton)) handler;
```

## Parameters

- `handler`: The block invoked after the user taps the map button.

<a id="return-value"></a>

## Return Value

A newly initialized map button.
