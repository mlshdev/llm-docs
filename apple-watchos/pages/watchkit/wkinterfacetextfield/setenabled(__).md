> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/setenabled(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/setenabled(_:))

# setEnabled(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Enables or disables the text field.

## Declaration

```swift
func setEnabled(_ enabled: Bool)
```

## Parameters

- `enabled`: A Boolean value indicating whether the text field is enabled or disabled.

<a id="Discussion"></a>

## Discussion

The `enabled` value determines whether the text field responds to user interaction. For enabled text fields, tapping the text field starts the text entry process. On watchOS, the system displays the text input controller. On nearby iOS devices associated with the same iCloud account, the system displays the Apple Remote Keyboard. A disabled text field does not respond to taps.

## See Also

### Configuring the Control

- [setSecureTextEntry(\_:)](setsecuretextentry%28__%29.md): Determines whether the text field hides the text entered by the user.

# setEnabled: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Enables or disables the text field.

## Declaration

```objectivec
- (void) setEnabled:(BOOL) enabled;
```

## Parameters

- `enabled`: A Boolean value indicating whether the text field is enabled or disabled.

<a id="Discussion"></a>

## Discussion

The `enabled` value determines whether the text field responds to user interaction. For enabled text fields, tapping the text field starts the text entry process. On watchOS, the system displays the text input controller. On nearby iOS devices associated with the same iCloud account, the system displays the Apple Remote Keyboard. A disabled text field does not respond to taps.

## See Also

### Configuring the Control

- [setSecureTextEntry:](setsecuretextentry%28__%29.md): Determines whether the text field hides the text entered by the user.
