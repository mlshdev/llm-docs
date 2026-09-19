> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslayoutconstraint/identifier

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The name that identifies the constraint.

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A constraint’s identifier is available in its description. Identifiers that start with `NS` are reserved by the system.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The name that identifies the constraint.

## Declaration

```objectivec
@property (copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

A constraint’s identifier is available in its description. Identifiers that start with `NS` are reserved by the system.
