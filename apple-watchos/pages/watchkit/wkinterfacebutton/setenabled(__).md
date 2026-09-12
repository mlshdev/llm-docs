> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacebutton/setenabled(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacebutton/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the button.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: A Boolean value indicating whether the button is enabled or disabled.

<a id="Discussion"></a>

## Discussion

When the user taps an enabled button, WatchKit executes the associated action method (if any) in your WatchKit extension code. A disabled button does not respond to taps in its content area.

# setEnabled: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Enables or disables the button.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: A Boolean value indicating whether the button is enabled or disabled.

<a id="Discussion"></a>

## Discussion

When the user taps an enabled button, WatchKit executes the associated action method (if any) in your WatchKit extension code. A disabled button does not respond to taps in its content area.
