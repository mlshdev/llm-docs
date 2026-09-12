> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepicker/setenabled(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacepicker/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the picker.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: A Boolean value indicating whether the picker is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled picker does not respond to taps in its content area and cannot receive focus. When the user selects an item in an enabled picker, WatchKit executes the associated action method (if any) in your WatchKit extension code.

# setEnabled: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the picker.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: A Boolean value indicating whether the picker is enabled or disabled.

<a id="Discussion"></a>

## Discussion

A disabled picker does not respond to taps in its content area and cannot receive focus. When the user selects an item in an enabled picker, WatchKit executes the associated action method (if any) in your WatchKit extension code.
