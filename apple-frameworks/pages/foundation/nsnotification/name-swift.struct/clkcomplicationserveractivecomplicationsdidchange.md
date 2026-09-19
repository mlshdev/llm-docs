> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/clkcomplicationserveractivecomplicationsdidchange

# CLKComplicationServerActiveComplicationsDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** watchOS 2.0+ (deprecated in 27.2)

Posted when the set of active complications changes.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
static let CLKComplicationServerActiveComplicationsDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object of the notification is `nil` and there’s no `userInfo` dictionary.
