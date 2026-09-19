> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidscrolleventoptions/kiohidscrolleventoptionsnoacceleration

# kIOHIDScrollEventOptionsNoAcceleration

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

An option for not applying the default acceleration algorithm to this event.

## Declaration

```objectivec
kIOHIDScrollEventOptionsNoAcceleration
```

<a id="Discussion"></a>

## Discussion

Scroll events are normally subject to an acceleration algorithm. Use this option if you don’t want to have that acceleration logic applied to the scroll event.
