> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationserveractivecomplicationsdidchangenotification

# CLKComplicationServerActiveComplicationsDidChangeNotification

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

Posted when the set of active complications changes.

## Declaration

```objectivec
extern NSString * const CLKComplicationServerActiveComplicationsDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The object of the notification is `nil` and there’s no `userInfo` dictionary.
