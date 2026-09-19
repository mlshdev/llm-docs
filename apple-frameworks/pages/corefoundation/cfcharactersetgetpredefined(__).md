> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfcharactersetgetpredefined(_:)

# CFCharacterSetGetPredefined(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a predefined character set.

## Declaration

```swift
func CFCharacterSetGetPredefined(_ theSetIdentifier: CFCharacterSetPredefinedSet) -> CFCharacterSet!
```

## Parameters

- `theSetIdentifier`: A predefined character set. See [Predefined CFCharacterSet Selector Values](predefined_cfcharacterset_selector_values.md) for the list of available character sets.

<a id="return-value"></a>

## Return Value

A predefined character set. This instance is owned by Core Foundation.

# CFCharacterSetGetPredefined (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a predefined character set.

## Declaration

```objectivec
extern CFCharacterSetRefCFCharacterSetGetPredefined(CFCharacterSetPredefinedSet theSetIdentifier);
```

## Parameters

- `theSetIdentifier`: A predefined character set. See [Predefined CFCharacterSet Selector Values](predefined_cfcharacterset_selector_values.md) for the list of available character sets.

<a id="return-value"></a>

## Return Value

A predefined character set. This instance is owned by Core Foundation.
