> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagecomposebarbutton/new

# new

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a message compose button with a system-provided image.

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This button type does not use a handler. Instead, tapping this button activates Siri and initiates the compose message flow.

## See Also

### Creating a Message Compose Bar Button

- [init](init%28%29.md): Creates a message compose button with a system-provided image.
- [initWithImage:](init%28image_%29.md): Creates a message compose button that displays a custom image.
