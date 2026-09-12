> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilteraction/none](https://developer.apple.com/documentation/identitylookup/ilmessagefilteraction/none)

# ILMessageFilterAction.none (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Allows the system to show the message unfiltered due to insufficient information to determine an action.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

In a query response, setting this value allows the system to show the message unfiltered.

## See Also

### Filter Actions

- [ILMessageFilterAction.allow](allow.md): Allows the system to show the message unfiltered.
- [ILMessageFilterAction.junk](junk.md): Prevents the system from showing the message normally, filtered as a Junk message.
- [ILMessageFilterAction.promotion](promotion.md): Prevents the system from showing the message normally, filtered as a Promotional message.
- [ILMessageFilterAction.transaction](transaction.md): Prevents the system from showing the message normally, filtered as a Transactional message.

# ILMessageFilterActionNone (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Allows the system to show the message unfiltered due to insufficient information to determine an action.

## Declaration

```objectivec
ILMessageFilterActionNone
```

<a id="Discussion"></a>

## Discussion

In a query response, setting this value allows the system to show the message unfiltered.

## See Also

### Filter Actions

- [ILMessageFilterActionAllow](allow.md): Allows the system to show the message unfiltered.
- [ILMessageFilterActionJunk](junk.md): Prevents the system from showing the message normally, filtered as a Junk message.
- [ILMessageFilterActionPromotion](promotion.md): Prevents the system from showing the message normally, filtered as a Promotional message.
- [ILMessageFilterActionTransaction](transaction.md): Prevents the system from showing the message normally, filtered as a Transactional message.
