> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptableobjectpointerpersonality](https://developer.apple.com/documentation/foundation/nsmaptableobjectpointerpersonality)

# NSMapTableObjectPointerPersonality (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equivalent to [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).

## Declaration

```swift
var NSMapTableObjectPointerPersonality: NSPointerFunctions.Options { get }
```

## See Also

### Personality Options

- [cStringPersonality](nspointerfunctions/options/cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [integerPersonality](nspointerfunctions/options/integerpersonality.md): Use unshifted value as hash and equality.
- [objectPersonality](nspointerfunctions/options/objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [opaquePersonality](nspointerfunctions/options/opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [structPersonality](nspointerfunctions/options/structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](nspointerfunctions/sizefunction.md)).

# NSMapTableObjectPointerPersonality (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equivalent to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSMapTableObjectPointerPersonality;
```

## See Also

### Personality Options

- [NSPointerFunctionsCStringPersonality](nspointerfunctions/options/cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [NSPointerFunctionsIntegerPersonality](nspointerfunctions/options/integerpersonality.md): Use unshifted value as hash and equality.
- [NSPointerFunctionsObjectPersonality](nspointerfunctions/options/objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [NSPointerFunctionsOpaquePersonality](nspointerfunctions/options/opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [NSPointerFunctionsStructPersonality](nspointerfunctions/options/structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](nspointerfunctions/sizefunction.md)).
