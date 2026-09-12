> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceslider/setenabled(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceslider/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the slider.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: A Boolean value indicating whether the slider is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled slider does not respond to taps in its up and down buttons. When the user taps an enabled slider, WatchKit updates the slider value and executes the associated action method (if any) in your WatchKit extension.

# setEnabled: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the slider.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: A Boolean value indicating whether the slider is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled slider does not respond to taps in its up and down buttons. When the user taps an enabled slider, WatchKit updates the slider value and executes the associated action method (if any) in your WatchKit extension.
