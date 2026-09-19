> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstintconfiguration/adaptstouseraccentcolor

# adaptsToUserAccentColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the tint configuration alters its effect based on the user’s preferred accent color choice.

## Declaration

```swift
var adaptsToUserAccentColor: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is `YES`, the tint configuration alters it effect based on the user’s preferred accent color. Otherwise, the tint configuration produces a constant effect regardless of the accent color preference.

# adaptsToUserAccentColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the tint configuration alters its effect based on the user’s preferred accent color choice.

## Declaration

```objectivec
@property (readonly) BOOL adaptsToUserAccentColor;
```

<a id="Discussion"></a>

## Discussion

When this property is `YES`, the tint configuration alters it effect based on the user’s preferred accent color. Otherwise, the tint configuration produces a constant effect regardless of the accent color preference.
