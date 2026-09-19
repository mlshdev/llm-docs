> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/msmessagelivelayout/alternatelayout

# alternateLayout (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A template layout to be displayed when the live layout is unavailable.

## Declaration

```swift
var alternateLayout: MSMessageTemplateLayout { get }
```

<a id="Discussion"></a>

## Discussion

To display the live layout, the device must be running iOS 11 or later, and must have your iMessage app installed. All other devices, including devices that do not support iMessage apps (macOS, iOS 9 and earlier, and SMS devices), use the  alternate layout.

# alternateLayout (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A template layout to be displayed when the live layout is unavailable.

## Declaration

```objectivec
@property (nonatomic, readonly) MSMessageTemplateLayout * alternateLayout;
```

<a id="Discussion"></a>

## Discussion

To display the live layout, the device must be running iOS 11 or later, and must have your iMessage app installed. All other devices, including devices that do not support iMessage apps (macOS, iOS 9 and earlier, and SMS devices), use the  alternate layout.
