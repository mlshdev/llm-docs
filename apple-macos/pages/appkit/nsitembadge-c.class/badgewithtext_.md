> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsitembadge-c.class/badgewithtext:

# badgeWithText:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Creates a badge displaying a text.

## Declaration

```objectivec
+ (NSItemBadge *) badgeWithText:(NSString *) text;
```

## Parameters

- `text`: The text to be displayed inside the badge.

<a id="return-value"></a>

## Return Value

A new `NSItemBadge` instance with the specified text.
