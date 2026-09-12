> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscollectordisabledoption](https://developer.apple.com/documentation/foundation/nscollectordisabledoption)

# NSCollectorDisabledOption (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.

## Declaration

```swift
var NSCollectorDisabledOption: Int { get }
```

## See Also

### Constants

- [NSScannedOption](nsscannedoption.md): Specifies allocation of scanned memory.

# NSCollectorDisabledOption (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.

## Declaration

```objectivec
NSCollectorDisabledOption
```

## See Also

### Constants

- [NSScannedOption](nsscannedoption.md): Specifies allocation of scanned memory.
