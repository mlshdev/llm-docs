> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscriticalalertstyle](https://developer.apple.com/documentation/appkit/nscriticalalertstyle)

# NSCriticalAlertStyle

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.3+ (deprecated in 10.12)

## Declaration

```objectivec
static const NSAlertStyle NSCriticalAlertStyle;
```

<a id="Discussion"></a>

## Discussion

Reserved for critical alerts, such as when severe consequences might result from certain user responses (for example, a “clean install” will erase all data on a volume). This style includes a caution icon badged with the app icon.

## See Also

### Deprecated Symbols

- [NSWarningAlertStyle](nswarningalertstyle.md): Deprecated. An alert used to warn the user about a current or impending event. The purpose is more than informational but not critical. This is the default alert style.
- [NSInformationalAlertStyle](nsinformationalalertstyle.md): Deprecated. An alert used to inform the user about a current or impending event.
