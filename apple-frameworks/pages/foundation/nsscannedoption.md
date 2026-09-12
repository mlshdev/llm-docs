> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscannedoption](https://developer.apple.com/documentation/foundation/nsscannedoption)

# NSScannedOption (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Specifies allocation of scanned memory.

## Declaration

```swift
var NSScannedOption: Int { get }
```

## See Also

### Constants

- [NSCollectorDisabledOption](nscollectordisabledoption.md): Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.

# NSScannedOption (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Specifies allocation of scanned memory.

## Declaration

```objectivec
NSScannedOption
```

## See Also

### Constants

- [NSCollectorDisabledOption](nscollectordisabledoption.md): Specifies that the block is retained, and therefore ineligible for collection. Specifying this option is equivalent to invoking [disableCollectorForPointer:](nsgarbagecollector/disablecollectorforpointer_.md) with the returned block as the argument.
