> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceswitch/setenabled(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceswitch/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the switch.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: A Boolean value indicating whether the switch is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled switch does not respond to taps in its content area. When the user taps an enabled switch, WatchKit executes the associated action method (if any) in your WatchKit extension.

# setEnabled: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the switch.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: A Boolean value indicating whether the switch is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled switch does not respond to taps in its content area. When the user taps an enabled switch, WatchKit executes the associated action method (if any) in your WatchKit extension.
