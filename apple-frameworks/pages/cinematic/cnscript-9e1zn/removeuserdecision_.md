> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/removeuserdecision:

# removeUserDecision:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Removes an existing user decision.

## Declaration

```objectivec
- (BOOL) removeUserDecision:(CNDecision *) decision;
```

## Parameters

- `decision`: The user decision added to the script or one made at recording time by tapping on the script.

<a id="return-value"></a>

## Return Value

A flag indicating whether the user decisions was removed.

<a id="Discussion"></a>

## Discussion

You can’t remove decisions that aren’t user decisions.
