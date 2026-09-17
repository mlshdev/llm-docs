> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkdialogresult/showdefault

# WKDialogResult.showDefault (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.

## Declaration

```swift
case showDefault
```

## See Also

### First use dialog results

- [WKDialogResult.askAgain](askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResult.handled](handled.md): A result that indicates the delegate displayed the first use message.

# WKDialogResultShowDefault (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

A result that indicates the delegate didn’t display a message, so the web view should show the default Lockdown Mode message.

## Declaration

```objectivec
WKDialogResultShowDefault
```

## See Also

### First use dialog results

- [WKDialogResultAskAgain](askagain.md): A result that indicates the delegate didn’t display a message, so other web views should check again.
- [WKDialogResultHandled](handled.md): A result that indicates the delegate displayed the first use message.
